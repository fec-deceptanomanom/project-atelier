const express = require('express');
const axios = require('axios');
// Get the API key and set it as default for ALL axios requests
const secrets = require('../.secret.json');

const app = express();
const port = 3000;

// Set the static served page
app.use(express.static(__dirname + '/../client/dist'));


const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
axios.defaults.headers.common['Authorization'] = secrets.GitHub_API_KEY;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Example API call, will be modified later
app.get('/products', (req, res) => {
  axios.get(API_URL + '/products')
    .then(function (results) {
      res.send(results.data);
    })
    .catch(function (error) {
      res.send(error);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})