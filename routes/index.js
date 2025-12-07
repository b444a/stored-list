

const express = require('express');
const router = express.Router();
const Snack = require('../models/snack');



router.get('/', async (req, res) => {
  console.log("ROUTE REACHED");
  try {
    const snacks = await Snack.find();

    console.log("Snacks loaded:", snacks); 

    res.render('index.hbs', { snacks });

  } catch (err) {
    console.error("Snack load error:", err);
    res.send("Error loading snacks");
  }
});

module.exports = router;

