const mongoose = require('mongoose');
require('dotenv').config();

const Lesson = require('./lesson');
const Quote = require('./quote');

async function seed(){
  const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/global_light';
  await mongoose.connect(MONGODB_URI);
  console.log('Connected to DB for seeding');

  const lessons = [
    { title: 'Mathematics - Algebra (WASSCE)', level: 'WASSCE', content: 'Algebra topics: equations, inequalities, factorization.' },
    { title: 'English - Essay Writing', level: 'WASSCE', content: 'Techniques for essay structure and practice prompts.' },
    { title: 'Bible - John 3:16 explained', level: 'General', content: 'Study and reflection.' }
  ];

  await Lesson.deleteMany({});
  await Lesson.insertMany(lessons);
  console.log('Lessons seeded');

  const quotes = [
    "Keep going — your light shines brightest in darkness.",
    "Faith and effort create miracles.",
    "You are capable of greatness through Christ."
  ];
  await Quote.deleteMany({});
  await Quote.insertMany(quotes.map(t=>({ text: t })));
  console.log('Quotes seeded');

  process.exit(0);
}

if(require.main === module) seed();
module.exports = seed;
