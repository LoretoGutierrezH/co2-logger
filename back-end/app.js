const express = require('express');
const travelRouter = require('./routes/travelRoutes');
const app = express();

app.use('travel-log/v1/travels', travelRouter);

module.exports = app;