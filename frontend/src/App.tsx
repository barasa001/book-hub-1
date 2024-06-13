import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookDetails from './components/BookDetails';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/:olid" element={<BookDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
