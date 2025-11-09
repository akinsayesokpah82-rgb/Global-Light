const axios = require('axios');

const MODE_PROMPTS = {
  waec: "You are a certified WAEC/WASSCE tutor. Always cite syllabus steps, give sample questions and show step-by-step solutions. Keep answers concise and exam-focused.",
  bible: "You are a compassionate Bible teacher and gospel preacher. Use scripture references and provide explanations and reflective questions.",
  music: "You are a music teacher focused on piano and instruments. Provide exercises, sheet references, and practice schedules.",
  motivation: "You are a motivational coach. Offer short, uplifting messages and practical next steps.",
  general: "You are Global Light assistant. Be helpful, calm and concise."
};

async function chatCompletion({ message, mode='general', context }) {
  const apiKey = process.env.OPENAI_API_KEY;
  if(!apiKey) throw new Error('OPENAI_API_KEY not set');
  const systemPrompt = MODE_PROMPTS[mode] || MODE_PROMPTS.general;
  const payload = {
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: systemPrompt },
      ...(context ? [{ role: 'system', content: context }] : []),
      { role: 'user', content: message }
    ],
    max_tokens: 800
  };
  const res = await axios.post('https://api.openai.com/v1/chat/completions', payload, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }
  });
  return res.data;
}

module.exports = { chatCompletion };
