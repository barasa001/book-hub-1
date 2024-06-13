import React, { useState, useEffect } from 'react';
import { fetchBookDetails } from '../services/api';
import { useParams } from 'react-router-dom';
import styles from '../styles/BookDetails.module.css';

interface BookDetailsParams {
  olid: string;
}

interface Book {
  title: string;
  authors: string[];
  publish_date: string;
  description: string;
  // Add more fields as needed
}

const BookDetails: React.FC = () => {
  const { olid }: { olid?: string } = useParams();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const getBookDetails = async () => {
      try {
        if (!olid) return; // Exit early if olid is undefined

        const data: Book = await fetchBookDetails(olid);
        setBook(data);
      } catch (error) {
        console.error('Error fetching book details', error);
      }
    };

    getBookDetails();
  }, [olid]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.bookDetails}>
      <h2>{book.title}</h2>
      <p>{book.authors.join(', ')}</p>
      <p>{book.publish_date}</p>
      <p>{book.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default BookDetails;