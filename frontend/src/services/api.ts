import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const OPEN_LIBRARY_API_URL = 'https://openlibrary.org';

// Local API functions
export const fetchBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books', error);
    throw error;
  }
};

// Open Library API functions
export const searchBooks = async (query: string) => {
  try {
    const response = await axios.get(`${OPEN_LIBRARY_API_URL}/search.json?q=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error searching books', error);
    throw error;
  }
};

export const fetchBookDetails = async (olid: string) => {
  try {
    const response = await axios.get(`${OPEN_LIBRARY_API_URL}/books/${olid}.json`);
    return response.data;
  } catch (error) {
    console.error('Error fetching book details', error);
    throw error;
  }
};