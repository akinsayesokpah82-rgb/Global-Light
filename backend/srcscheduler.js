const cron = require('node-cron');
const axios = require('axios');
const Quote = require('../models/quote');

const quotes = [
  "Keep going — your light shines brightest in darkness.",
  "Faith and effort create miracles.",
  "You are capable of greatness through Christ.",
  "Never stop learning — wisdom builds nations."
];

async function postToFacebook(text){
  try {
    const token = process.env.FB_PAGE_ACCESS_TOKEN;
    const pageId = process.env.FB_PAGE_ID;
    if(!token || !pageId) return null;
    const url = `https://graph.facebook.com/${pageId}/feed`;
    const resp = await axios.post(url, { message: text, access_token: token });
    return resp.data;
  } catch (e) {
    console.error('Error posting to FB', e.response?.data || e.message);
    return null;
  }
}

function getRandomQuote(){
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function start(){
  cron.schedule('*/30 * * * *', async () => {
    const q = getRandomQuote();
    console.log('[Motivation Scheduler]', q);
    try { await Quote.create({ text: q }); } catch(e){}
    await postToFacebook(q);
  });
  console.log('Scheduler started');
}

module.exports = { start };
