const mongoose = require('mongoose');
const QuoteSchema = new mongoose.Schema({
  text: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Quote', QuoteSchema);
