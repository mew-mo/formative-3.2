const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  imgUrl: String,
  author: String,
  url: String,
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
  // the user logged on is the one tied to / who has the power to manipulate the product.
})

module.exports = mongoose.model('Item', portfolioSchema);
