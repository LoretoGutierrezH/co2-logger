const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
  travelFrom: {
    type: String,
    required: [true, 'Author must specify their exact starting point.']
  },
  travelTo: {
    type: String,
    required: [true, 'Author must specify their exact destination.']
  },
  transport: {
    type: String,
    required: [true, 'Author must specify the type of transport they used.']
  },
  kmTraveled: {
    type: Number,
    required: [true, 'Author must specify how long was the trip in km.']
  },
  workers: {
    type: Number
  },
  logAuthor: {
    type: String,
    required: [true, 'Author must identify themselves.']
  },
  roundTrip: {
    type: Boolean,
    required: [true, 'Author must specify if it was a round trip or not.']
  },
  totalCO2: {
    type: Number,
    required: [true, 'CO2 calculation result must be provided.']
  },
  CO2byWorker: {
    type: Number,
    required: [true, 'CO2-by-worker calculation result must be provided.']
  }
});

const Travel = new mongoose.model('Travel', travelSchema);

module.exports = Travel;