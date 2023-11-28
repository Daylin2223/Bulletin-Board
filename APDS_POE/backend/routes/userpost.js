
const express = require('express')
const router = express.Router();
const UserPost = require('../models/userpost'); 
const checkauth = require('../check-auth');


// Display Message
router.get('', (req, res)=>{
    res.send('Hello World')
});

// GET Posts from Database
router.get('/all', (req, res) => {
    
    UserPost.find()
        .then((userposts) => {
            res.status(200).json({ userposts: userposts });
        })
        .catch((error) => {
            res.status(500).json({ error: error });
        });
});


// Push The Post To Database
router.post('', checkauth,(req, res) => {
    const userpost = new UserPost({ 
        id: req.body.id,
        name: req.body.name
    });
    userpost.save().then(() => {
        res.status(201).json({
            message: 'UserPost Created', 
            userpost: userpost, 
        });
    });
});

// Delete Post From Database
router.delete('/:id', checkauth,(req, res) => {
    UserPost.deleteOne({ _id: req.params.id }).then((result) => {
        res.status(200).json({ message: 'UserPost Deleted' }); 
    });
});

module.exports = router;
