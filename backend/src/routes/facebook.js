const express = require('express');
const router = express.Router();
const axios = require('axios');

// POST /api/facebook/post
router.post('/post', async (req, res) => {
  try {
    const token = process.env.FB_PAGE_ACCESS_TOKEN;
    const pageId = process.env.FB_PAGE_ID;
    if(!token || !pageId) return res.status(400).json({ error: 'FB_PAGE_ACCESS_TOKEN or FB_PAGE_ID missing' });
    const { message, link } = req.body;
    const url = `https://graph.facebook.com/${pageId}/feed`;
    const resp = await axios.post(url, { message, link, access_token: token });
    res.json({ ok: true, data: resp.data });
  } catch (e) {
    console.error('FB post error', e.response?.data || e.message);
    res.status(500).json({ error: 'Failed to post to Facebook', details: e.response?.data || e.message });
  }
});

module.exports = router;
