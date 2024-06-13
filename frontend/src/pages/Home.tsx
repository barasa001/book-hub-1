import React, { useState } from 'react';
import Search from '../components/Search';
import Filters from '../components/Filters';

interface FiltersState {
  genre: string;
  author: string;
  publicationDate: string;
}

const Home: React.FC = () => {
  const [filters, setFilters] = useState<FiltersState>({
    genre: '',
    author: '',
    publicationDate: ''
  });

  const handleFilter = (newFilters: FiltersState) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <h2>Welcome to Book Hub</h2>
      <Filters onFilter={handleFilter} />
      <Search filters={filters} />
    </div>
  );
};

export default Home;