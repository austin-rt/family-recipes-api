const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/family-recipes';

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((e) => {
    console.log('Connection error:', e.message);
  });

const db = mongoose.connection;

module.exports = db;
