import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from '../styles/Filters.module.css';

interface FiltersProps {
  onFilter: (filters: FiltersState) => void;
}

interface FiltersState {
  genre: string;
  author: string;
  publicationDate: string;
}

const Filters: React.FC<FiltersProps> = ({ onFilter }) => {
  const [filters, setFilters] = useState<FiltersState>({
    genre: '',
    author: '',
    publicationDate: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleFilterSubmit = (e: FormEvent) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <div className={styles.filters}>
      <form onSubmit={handleFilterSubmit}>
        <input
          type="text"
          name="genre"
          value={filters.genre}
          onChange={handleInputChange}
          placeholder="Filter by genre"
        />
        <input
          type="text"
          name="author"
          value={filters.author}
          onChange={handleInputChange}
          placeholder="Filter by author"
        />
        <input
          type="text"
          name="publicationDate"
          value={filters.publicationDate}
          onChange={handleInputChange}
          placeholder="Filter by publication date"
        />
        <button type="submit">Apply Filters</button>
      </form>
    </div>
  );
};

export default Filters;