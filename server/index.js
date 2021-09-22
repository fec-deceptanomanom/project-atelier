const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const secrets = require('../.secret.json');

const app = express();
const port = 3000;


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
  })
  .catch((error) => {
    res.send(error);
  });

  // Get the initial question list. currently only returns up to the first 5 questions, which is wrong
  const questionsList = new Promise((resolve, reject) => {
    axios.get(API_URL + '/qa/questions?product_id=' + req.params.id)
      .then(results => {
        resolve(results.data);
      })
      .catch(error => {
        reject(error);
      })
  });

  Promise.all([productInfo, styleInfo, reviewInfo, relatedIDs, questionsList, reviews])
  .then((results) => {
    res.send({
      productInfo: results[0],
      styleInfo: results[1],
      reviewInfo: results[2],
      relatedIDs: results[3],
      questionsList : results[4],
      reviews: results[5]
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
app.get('/questions/:id', (req, res) => {

  // Get the initial question list. currently only returns up to the first 5 questions, which is wrong
  const questionsList = [];
  let oldCounter = 0;
  let newCounter= 0;

  const getNextPage = function() {
    newCounter++;
    const newPromise = new Promise((resolve, reject) => {
      axios.get(API_URL + '/qa/questions?product_id=' + req.params.id + '&page=' + newCounter)
        .then(results => {
          console.log('fetched a page of questions');
          oldCounter++
          resolve(results.data);
        })
        .catch(error => {
          console.log('no more questions');
          reject(error);
        })
    });
    questionsList.push(newPromise);
  };

  while (oldCounter === newCounter) {
    getNextPage();
  }

  Promise.all(questionsList)
  .then((results) => {
    //console.log('PROMISE ALL RESULTS', results);
    let questionsList = {
      product_id: results[0]['product_id'],
      results: []
    };
    results.map(entry => {
     // console.log('entry', entry.results);
      questionsList.results = questionsList.results.concat(entry.results);
    })
    res.send(questionsList);
  })
  .catch((error) => {
    if (error.message && error.message === "Request failed with status code 404") {
      res.status(404).send("Not found.");
    } else {
      res.send(error);
    }
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})