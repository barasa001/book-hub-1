import React, { useState, useEffect } from 'react';
import { searchBooks } from '../services/api';
import { Link } from 'react-router-dom';
import styles from '../styles/Search.module.css';

interface SearchProps {
  filters: {
    genre: string;
    author: string;
    publicationDate: string;
  };
}

const Search: React.FC<SearchProps> = ({ filters }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (query) {
      handleSearch();
    }
  }, [query, filters]);

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
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

  return (
    <div className={styles.search}>
      <form onSubmit={handleSearch}>
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
          <div key={book.key || book.cover_i} className={styles.result}>
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