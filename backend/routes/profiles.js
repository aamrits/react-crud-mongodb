const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

router.get('/', (req, res) => {
  res.send('profiles')
})

router.post('/', async (req, res) => {
  const profile = new Profile({
    name: req.body.name,
    email: req.body.email
  })

  try {
    const savedPost = await profile.save();
    res.json(savedPost);
  } catch(err) {
    res.json({message: err});
  }
})

module.exports = router;