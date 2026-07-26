const express = require('express');
const router = express.Router();
const GiftConfig = require('../models/GiftConfig');

// GET current configuration
router.get('/', async (req, res) => {
  try {
    let config = await GiftConfig.findOne().sort({ createdAt: -1 });
    if (!config) {
      return res.status(404).json({ message: 'No custom config found in DB, using fallback' });
    }
    res.json(config);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST or UPDATE configuration
router.post('/', async (req, res) => {
  try {
    let config = await GiftConfig.findOne();
    if (config) {
      Object.assign(config, req.body);
      await config.save();
    } else {
      config = new GiftConfig(req.body);
      await config.save();
    }
    res.json({ message: 'Gift configuration saved to MongoDB successfully!', config });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
