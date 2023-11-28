// models/userpost.js
const mongoose = require('mongoose');

const userpostSchema = new mongoose.Schema({
  id: String,
  name: String,
});

const UserPost = mongoose.model('UserPost', userpostSchema);

module.exports = UserPost;
