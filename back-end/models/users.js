const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectID,
  username: String,
  email: String,
  password: String,
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
  // the user logged on is the one tied to / who has the power to manipulate the product.
})

module.exports = mongoose.model('User', userSchema);
