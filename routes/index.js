const express = require('express');
const router = express.Router();
const Snack = require('../models/snack');


// GET — Load snacks
router.get('/', async (req, res) => {
  try {
    const snacks = await Snack.find();
    res.render('index.hbs', { snacks });
  } catch (err) {
    console.error("Snack load error:", err);
    res.send("Error loading snacks");
  }
});


// POST — Create new snack
router.post('/item', async (req, res) => {
  try {
    const { name, category } = req.body;
    await Snack.create({ name, category });
    res.redirect('/');
  } catch (err) {
    console.error("Error creating snack:", err);
    res.status(500).send("Error creating snack");
  }
});


// PUT — Update snack
router.put('/item/:id', async (req, res) => {
  try {
    const { name, category } = req.body;
    await Snack.findByIdAndUpdate(req.params.id, { name, category });
    res.redirect('/');
  } catch (err) {
    console.error("Error updating snack:", err);
    res.status(500).send("Error updating snack");
  }
});


// DELETE — Delete snack
router.delete('/item/:id', async (req, res) => {
  try {
    await Snack.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    console.error("Error deleting snack:", err);
    res.status(500).send("Error deleting snack");
  }
});


module.exports = router;
