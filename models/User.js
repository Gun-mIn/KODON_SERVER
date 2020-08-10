// Import mongoose module
const mongoose = require('mongoose');

// Create Schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true,
    unique: 1
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: {
    // ex. 1 : manager, 0 : normal user
    type: Number,
    default: 0
  },
  image: String,
  token: {
    // ex. 유효성 관리
    type: String
  },
  tokenExp: {
    // effective date of token
    type: Number
  }
});

// Create model and wrap up the schema
// model(model name, schema)
const User = mongoose.model('User', userSchema);

// Export module
module.exports = {User};
