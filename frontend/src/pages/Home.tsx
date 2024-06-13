// Home.tsx
import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import Filters from '../components/Filters';
import Book from '../components/Book';
import { fetchBooks } from '../services/api'; // Import fetchBooks function

const Home: React.FC = () => {
  const [filters, setFilters] = useState({});
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const fetchedBooks = await fetchBooks(); // Fetch books from API
        setBooks(fetchedBooks);
      } catch (error) {
        console.error('Error fetching books', error);
      }
    };

    loadBooks();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  const handleFilter = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <h2>Welcome to Book Hub</h2>
      <Filters onFilter={handleFilter} />
      <Search filters={filters} />

      <div className="book-list">
        {books.map((book: any) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;