const express = require('express');
const router = express.Router();
const seed = require('../models/seed');

router.post('/seed', async (req, res) => {
  try {
    await seed();
    res.json({ ok: true, msg: 'Seed complete' });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

module.exports = router;
