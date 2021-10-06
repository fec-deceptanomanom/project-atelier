const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const axios = require('axios');
const secrets = require('../.secret.json');
const { URL_BASE } = require('../.secretURL.json');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const { uploadFile } = require('./s3');

const app = express();
const port = 3000;

app.use(compression())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// Set the static served page for landing page
app.use('/', express.static(__dirname + '/../landingClient/dist'));

// Set the static served page for product info
app.use('/p/:product_id', express.static(__dirname + '/../client/dist'));

const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';

// Set the authorization header with the API key as default for ALL axios requests
axios.defaults.headers.common['Authorization'] = secrets.GitHub_API_KEY;


app.get('/productInfo/:id', (req, res) => {
  // Get the product info
  const productInfo = new Promise((resolve, reject) => {
    axios.get(API_URL + '/products/' + req.params.id)
      .then((results) => {
        resolve(results.data);
      })
      .catch((error) => {
        reject(error);
      });
  });

  // Get the product styles
  const styleInfo = new Promise((resolve, reject) => {
    axios.get(API_URL + '/products/' + req.params.id + '/styles')
      .then((results) => {
        resolve(results.data);
      })
      .catch((error) => {
        reject(error);
      });
  });

  // Get the product reviews data
  const reviewInfo = new Promise((resolve, reject) => {
    axios.get(API_URL + '/reviews/meta?product_id=' + req.params.id)
      .then((results) => {
        resolve(results.data);
      })
      .catch((error) => {
        reject(error);
      });
  });

  const reviews = new Promise((resolve, reject) => {
    axios.get(API_URL + '/reviews?product_id=' + req.params.id)
      .then((results) => {
        resolve(results.data);
      })
      .catch((error) => {
        reject(error);
      });
  });

  // Get the related product data ids
  const relatedIDs = new Promise((resolve, reject) => {
    axios.get(API_URL + '/products/' + req.params.id + '/related')
      .then((results) => {
        resolve(results.data);
      })
      .catch((error) => {
        reject(error);
      });
  });

  Promise.all([productInfo, styleInfo, reviewInfo, relatedIDs, reviews])
  .then((results) => {
    res.send({
      productInfo: results[0],
      styleInfo: results[1],
      reviewInfo: results[2],
      relatedIDs: results[3],
      reviews: results[4]
    });
  })
  .catch((error) => {
    if (error.message && error.message === "Request failed with status code 404") {
      res.status(404).send("Not found.");
    } else {
      res.send(error);
    }
  })
});

// seperating out questions GET request
app.get('/questions/:id', async (req, res) => {
  let URL = API_URL + '/qa/questions?product_id=' + req.params.id + '&page=';
  // recursive function to get all pages of questions
  const paginatedGet = (url, page, previousResponse) => {
    return (
      axios.get(url + page)
        .then(results => {
          return results.data.results
        })
        .then(newResponse => {
          const response = previousResponse.concat(newResponse);
          if (newResponse.length !==0) {
            page++;
            return paginatedGet(url, page, response)
          }
          return response;
        })
        .catch(error => {
          console.log('error');
          if (error.message && error.message === "Request failed with status code 404") {
            res.status(404).send("Not found.");
          } else {
            res.send(error);
          }
        })
    )
  }
  // call the recursive funciton and send the results
  let questions = await paginatedGet(URL, 1, []);
  //console.log(questions);
  res.send(questions);
});

app.post('/questions', upload.array('files'), (req, res) => {
  console.log('RECIEVED QUESTION POST REQUEST', req.body);
  //reformat to API standards
  const questionData = {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
    product_id: parseInt(req.body.productID),
  };
  //console.log('question data', questionData);
  // POST request to API -> destination /qa/questions
  axios.post(API_URL + '/qa/questions', questionData)
    .then((response) => {
      console.log(response)
      res.json({message: 'Success'})
    })
    .catch((error) => {
      console.log(error);
      if (error.message && error.message === "Request failed with status code 404") {
        res.status(404).send("Not found.");
      } else {
        res.send(error);
      }
    });
})

app.post('/answers', upload.array('files'), (req, res) => {
  console.log('RECIEVED ANSWER POST REQUEST', req.body);
  //console.log('FILES', req.files)
  let photoUploads = [];
  // send photo files to AWS CloudFront and retrieve URLs for them
  for (let i = 0; i < req.files.length; i++) {
    photoUploads.push(uploadFile(req.files[i]));
  }
  Promise.all(photoUploads)
  .then(results => {
    // push urls to fanswerData.files
    let urls = results.map(result => {
      const distribution = secrets.AWS_DIST_URL;
      return distribution + result.key;
    })
    // reformat to API standards
    const questionID = req.body.question;
    const answerData = {
      body: req.body.body,
      name: req.body.name,
      email: req.body.email,
      photos: urls,
    }
    return [questionID, answerData];
  })
  .then(data => {
    // POST request to API -> destination /qa/questions/:question_id/answers
    axios.post(API_URL + '/qa/questions/' + data[0] + '/answers', data[1])
    .then((response) => {
      // console.log(response)
      res.json({message: 'Success'})
    })
    .catch((error) => {
      console.log(error);
    });
  })
  .catch(error => {
    if (error.message && error.message === "Request failed with status code 404") {
      res.status(404).send("Not found.");
    } else {
      res.send(error);
    }
  })
})

// PUT requests for answers
app.put('/rate/answers/*', (req, res) => {
  const destination = req.url.slice(5);
  console.log('RECIEVED ANSWER PUT REQUEST', destination);

  //PUT request to API -> destination /qa/
  axios.put(API_URL + '/qa'+ destination)
    .then((response) => {
      //console.log(response)
      res.json({message: 'Success'})
    })
    .catch((error) => {
      console.log(error);
      if (error.message && error.message === "Request failed with status code 404") {
        res.status(404).send("Not found.");
      } else {
        res.send(error);
      }
    });
})

// PUT requests for questions
app.put('/rate/questions/*', (req, res) => {
  const destination = req.url.slice(5);
  console.log('RECIEVED QUESTIONS PUT REQUEST', destination);

  //PUT request to API -> destination /qa/
  axios.put(API_URL + '/qa'+ destination)
    .then((response) => {
      //console.log(response)
      res.json({message: 'Success'})
    })
    .catch((error) => {
      console.log(error);
      if (error.message && error.message === "Request failed with status code 404") {
        res.status(404).send("Not found.");
      } else {
        res.send(error);
      }
    });
});

  app.post('/interactions', (req, res) => {
    const body = req.body;
    axios.post(API_URL + '/interactions', body)
      .then( response => {
        // console.log('Axios RES is', response)
        res.sendStatus(response.status);
      })
      .catch( err => {
        console.error('ERROR IS\n', err);
      })
  })


app.listen(port, () => {
  console.log(`Example app listening at ${URL_BASE}!`);
})