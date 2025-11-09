require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const apiRoutes = require('./src/routes/api');
const scheduler = require('./src/services/scheduler');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/global_light';
mongoose.connect(MONGODB_URI)
  .then(()=> console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.use('/api', apiRoutes);

app.get('/', (req, res) => res.send('Global Light Backend is running.'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`🚀 Server listening on ${PORT}`));

scheduler.start();
