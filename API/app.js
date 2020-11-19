const express = require('express');
const travelRouter = require('./routes/travelRoutes');
const app = express();

app.use(express.json()); //without this controller methods won't work
app.use('/travel-log/v1/travels', travelRouter); //remember: "/" at the start

module.exports = app;