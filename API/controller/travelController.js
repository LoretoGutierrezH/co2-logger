const express = require('express');
const app = require('../app');


module.exports.getAllTravels = async (req, res) => {
  console.log('from inside');
  try {
    res.status(200).json({
      status: 'success',
      data: {
        travel: 'Un viajecito'
      }
    })
  } catch (error) {
    res.status(404).json({
      status: 'not found',
      message: 'The data you requested is not available at this moment.'
    })
  }
}

/* module.exports.createTravel = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
} */