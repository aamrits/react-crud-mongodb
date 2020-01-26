const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

// converts req.body into json
app.use(bodyParser.json());

// connect to database
mongoose.connect(
  process.env.DB_CONNECTION, 
  { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Connected with DB...');
})

// routes
const homeRoute = require('./routes/home');
const profileRoute = require('./routes/profiles');

// middleware
app.use('/', homeRoute);
app.use('/profiles', profileRoute);

// listen to server
app.listen(5600);