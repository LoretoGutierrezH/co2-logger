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

const port = 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
})