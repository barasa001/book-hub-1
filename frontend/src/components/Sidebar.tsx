import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;