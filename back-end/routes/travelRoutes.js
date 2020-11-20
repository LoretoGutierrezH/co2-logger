const express = require('express');
const app = require('../app');
const travelController = require('../controller/travelController');

const router = express.Router();

router.route('').get(travelController.getAllTravels).post(travelController.createTravel);

module.exports = router;