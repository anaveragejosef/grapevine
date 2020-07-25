const mongoose = require('mongoose');

const wineSchema = new mongoose.Schema({
  winery: {
    type: String,
    maxlength: 100
  },
  wineType: {
    type: String,
    enum: ['Red', 'White', 'Rose'];
    maxlength: 5
  },
  varietal: {
    type: String,
    maxlength: 20
  },
  vintage: {
    type: Number,
    min: 1800,
    max: 2020
  },
  notes: {
    type: String,
    maxlength: 280
  },
  purchaseAgain: Boolean
});

const Wine = mongoose.model('Wine', wineSchema);

module.exports = Wine;
