const express = require('express');
const app = require('../app');
const Travel = require('../model/Travel');


module.exports.getAllTravels = async (req, res) => {
  const travels = await Travel.find();
  try {
    res.status(200).json({
      status: 'success',
      data: {
        travels
      }
    })
  } catch (error) {
    res.status(404).json({
      status: 'not found',
      message: 'The data you requested is not available at this moment.'
    })
  }
}

module.exports.createTravel = async (req, res) => {
  try {
    const newTravel = await Travel.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        travel: newTravel
      }
    })
    
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: `There was an error and the travel log couldn't be created ${error}`
    })
  }
}