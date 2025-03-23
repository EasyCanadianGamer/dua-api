const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Helper function to load JSON files
const loadDuas = (category) => {
  const filePath = path.join(__dirname, `../data/${category}-duas.json`);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};


// Route to get duas by category
router.get('/:category', (req, res) => {
  const category = req.params.category;
  try {
    const duas = loadDuas(category);
    res.json(duas);
  } catch (err) {
    res.status(404).json({ error: 'Category not found' });
  }
});
router.get('/:category/:id', (req, res) => {
  const category = req.params.category;
  const id = parseInt(req.params.id); // Convert ID to a number

  try {
    const duas = loadDuas(category); // Load the duas for the category
    const dua = duas.find(d => d.id === id); // Find the dua with the matching ID

    if (dua) {
      res.json(dua); // Return the specific dua
    } else {
      res.status(404).json({ error: 'Dua not found' }); // If no dua matches the ID
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to load duas' }); // If there's an error loading the duas
  }
});

module.exports = router;