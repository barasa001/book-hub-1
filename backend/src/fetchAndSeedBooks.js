// fetchAndSeedBooks.js
const axios = require('axios');
const mongoose = require('mongoose');
const Book = require('./models/Book');

const MONGO_URI = 'mongodb://localhost:27017/bookhub';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

const fetchBooks = async () => {
  try {
    const response = await axios.get('https://openlibrary.org/subjects/fantasy.json?limit=100');
    const books = response.data.works.map(work => ({
      title: work.title,
      author: work.authors[0]?.name || 'Unknown Author',
      genre: 'Fantasy',
      publicationDate: work.first_publish_date ? new Date(work.first_publish_date) : new Date(),
      description: work.description || 'No description available'
    }));
    return books;
  } catch (error) {
    console.error('Error fetching books from Open Library API', error);
    return [];
  }
};

const seedDatabase = async () => {
  const books = await fetchBooks();
  if (books.length > 0) {
    await Book.deleteMany({});
    await Book.insertMany(books);
    console.log('Database seeded with books from Open Library API');
  } else {
    console.log('No books fetched to seed database');
  }
  mongoose.connection.close();
};

seedDatabase();