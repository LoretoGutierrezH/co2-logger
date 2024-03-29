const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'}); //saves env variables to process.env
const app = require('./app');

const DATABASE = process.env.DATABASE.replace('<password>', process.env.PASSWORD);

mongoose.connect(DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(connection => {
  console.log('DB connection stablished successfully');
})


if (process.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
})