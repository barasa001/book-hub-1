import React, { useState, useEffect } from 'react';
import { fetchBookDetails } from '../services/api'; // Assuming this function is correctly implemented
import { useParams } from 'react-router-dom';
import styles from '../styles/BookDetails.module.css';

interface Book {
  title: string;
  authors: { name: string }[];
  publish_date: string;
  description: string;
  // Add more fields as needed
}

const BookDetails: React.FC = () => {
  const { olid } = useParams<{ olid?: string }>(); // Make olid optional
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const getBookDetails = async () => {
      if (!olid) return; // Check if olid is undefined
      try {
        const data = await fetchBookDetails(olid); // Fetch book details from backend
        setBook(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching book details', error);
      }
    };

    getBookDetails();
  }, [olid]); // Re-fetch book details when olid changes

  if (!olid || !book) {
    return <div>Loading...</div>; // Render loading state while fetching data
  }

  return (
    <div className={styles.bookDetails}>
      <h2>{book.title}</h2>
      <p>Authors: {book.authors.map(author => author.name).join(', ')}</p>
      <p>Publish Date: {book.publish_date}</p>
      <p>Description: {book.description}</p>
    </div>
  );
};

export default BookDetails;