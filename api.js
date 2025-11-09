const express = require('express');
const router = express.Router();
const openaiRoutes = require('./openai');
const adminRoutes = require('./admin');
const fbRoutes = require('./facebook');

router.use('/openai', openaiRoutes);
router.use('/admin', adminRoutes);
router.use('/facebook', fbRoutes);

router.get('/', (req, res) => {
  res.json({status: 'ok', name: 'Global Light API'});
});

module.exports = router;
