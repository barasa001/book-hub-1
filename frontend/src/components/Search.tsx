import React, { useState, useEffect } from 'react';
import { searchBooks } from '../services/api';
import { Link } from 'react-router-dom';
import styles from '../styles/Search.module.css';

interface SearchProps {
  filters: any;
}

const Search: React.FC<SearchProps> = ({ filters }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query) return;

    try {
      const data = await searchBooks(query);
      const filteredResults = data.docs.filter((book: any) => {
        return (
          (!filters.genre || book.subject?.includes(filters.genre)) &&
          (!filters.author || book.author_name?.includes(filters.author)) &&
          (!filters.publicationDate || book.first_publish_year?.toString() === filters.publicationDate)
        );
      });
      setResults(filteredResults);
    } catch (error) {
      console.error('Error searching books', error);
    }
  };

  useEffect(() => {
    handleSearch(); // Initial search when component mounts
  }, [filters]); // Call handleSearch whenever filters change

  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(); // Call handleSearch when the form is submitted
  };

  return (
    <div className={styles.search}>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books..."
        />
        <button type="submit">Search</button>
      </form>
      <div className={styles.results}>
        {results.map((book: any) => (
          <div key={book.key} className={styles.result}>
            <h3>{book.title}</h3>
            <p>{book.author_name?.join(', ')}</p>
            <Link to={`/books/${book.cover_edition_key || book.key}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;