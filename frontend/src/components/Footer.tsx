import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Book Hub. All rights reserved.</p>
    </footer>
  );
};

export default Footer;