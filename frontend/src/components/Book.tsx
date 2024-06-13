// components/Book.tsx
import React from 'react';

interface BookProps {
  book: {
    title: string;
    authors: string[];
    publish_date: string;
    description: string;
  };
}

const Book: React.FC<BookProps> = ({ book }) => {
  return (
    <div className="book">
      <h3>{book.title}</h3>
      <p>Authors: {book.authors.join(', ')}</p>
      <p>Publish Date: {book.publish_date}</p>
      <p>Description: {book.description}</p>
      {}
    </div>
  );
};

export default Book;