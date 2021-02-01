const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wineSchema = new Schema({
  username: { type: String, required: true},
  winename: { type: String, required: true},
  rating: { type: Number, min: 0, max: 10, required: true},
  description: { type: String, required: true},
  date: { type: Date, required: true},
}, {
  timestamps: true,
});

const Wine = mongoose.model('Wine', wineSchema);

module.exports = Wine;