// BookDetails.tsx
import React, { useState, useEffect } from 'react';
import { fetchBookDetails } from '../services/api';
import { useParams } from 'react-router-dom';
import styles from '../styles/BookDetails.module.css';

interface BookDetailsParams {
  olid: string;
}

interface BookDetailsResponse {
  title: string;
  authors: string[];
  publish_date: string;
  description: string;
  cover_edition_key?: string; // Optional cover edition key
}

const BookDetails: React.FC = () => {
  const { olid }: { olid?: string } = useParams(); // Destructure olid as an optional string
  const [book, setBook] = useState<BookDetailsResponse | null>(null);

  useEffect(() => {
    const getBookDetails = async () => {
      try {
        if (!olid) return; // Exit early if olid is undefined

        const data: BookDetailsResponse = await fetchBookDetails(olid);
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

  // Constructing the cover image URL
  const coverImageUrl = book.cover_edition_key
    ? `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`
    : ''; 

  return (
    <div className={styles.bookDetails}>
      <h2>{book.title}</h2>
      {book.cover_edition_key && (
        <img src={coverImageUrl} alt={book.title} className={styles.coverImage} />
      )}
      <p>{book.authors.join(', ')}</p>
      <p>{book.publish_date}</p>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetails;