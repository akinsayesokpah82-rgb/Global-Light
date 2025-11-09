const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  role: { type: String, default: 'student' },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('User', UserSchema);
