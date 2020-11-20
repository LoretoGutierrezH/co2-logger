const express = require('express');
const travelRouter = require('./routes/travelRoutes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); //without this controller methods won't work
app.use('/travel-log/v1/travels', travelRouter); //remember: "/" at the start

module.exports = app;