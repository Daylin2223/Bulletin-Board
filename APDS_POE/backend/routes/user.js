const express = require('express')
const router = express.Router();
const User = require('../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/signup', (req, res)=>{
  bcrypt.hash(req.body.password,10)
  .then(hash => {
    const user = new User (
        {
            username: req.body.username,
            password: hash
        }
    );
    user.save()
    .then(result => {
    res.status(201).json({
        message: "User Created",
        user:user
    });
})
.catch(err => {
  res.status(500).json({
    error: err
    });
   });
  });
});

router.post('/login', (req, res) => {
    User.findOne({ username: req.body.username })
      .then((user) => {
        if (!user) {
          return res.status(401).json({
            message: 'Authentication Failure',
          });
        }
  
        const token = jwt.sign(
          { username: user.username, userid: user._id },
          'secret_this_should_be_longer_than_it_is',
          { expiresIn: '1h' }
        );
  
        res.status(200).json({ token: token });
      })
      .catch((error) => {
        return res.status(401).json({
          message: 'Authentication Failure',
        });
      });
  });
  
  module.exports = router;