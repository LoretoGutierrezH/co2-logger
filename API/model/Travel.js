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
  workersNames: {
    type: Array
  },
  logAuthor: {
    type: String,
    required: [true, 'Author must identify themselves.']
  },
  roundTrip: {
    type: Boolean,
    required: [true, 'Author must specify if it was a round trip or not.']
  }
});

const Travel = new mongoose.model('Travel', travelSchema);

module.exports = Travel;