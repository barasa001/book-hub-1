import React from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Book Hub</h1>
    </header>
  );
};

export default Header;