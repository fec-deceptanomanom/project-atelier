const express = require('express');
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

  Promise.all([productInfo, styleInfo, reviewInfo])
  .then((results) => {
    res.send({
      productInfo: results[0],
      styleInfo: results[1],
      reviewInfo: results[2],
      relatedIDs: results[3]
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})