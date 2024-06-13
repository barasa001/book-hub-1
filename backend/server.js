// server.js
const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./src/routes/books');
const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/bookhub';

// Middleware
app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));