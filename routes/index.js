const express = require('express');
const router = express.Router();
const Snack = require('../models/snacks');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    // Get all snacks from the database
    const snacks = await Snack.find();
    
    // Render the home page with the snacks data
    res.render('home', {
      title: 'My Favorite Snacks',
      snacks: snacks
    });
  } catch (error) {
    console.error('Error fetching snacks:', error);
    res.status(500).send('Error loading snacks');
  }
});

module.exports = router;