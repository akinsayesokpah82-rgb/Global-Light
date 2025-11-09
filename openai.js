const express = require('express');
const router = express.Router();
const { chatCompletion } = require('../services/openaiService');

router.post('/chat', async (req, res) => {
  try {
    const { message, mode='general', context } = req.body;
    if(!message) return res.status(400).json({ error: 'message is required' });
    const response = await chatCompletion({ message, mode, context });
    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'OpenAI request failed', details: err.message });
  }
});

module.exports = router;
