// src/components/Logo.js
import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png'; // Make sure to replace with the correct path

const Logo = () => {
  return (
    <Link to="/blog" style={styles.logo}>
      <img src={logoImage} alt="Logo" style={styles.image} />
    </Link>
  );
};

const styles = {
  logo: {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    zIndex: 1000, // Ensure it is on top of other elements
  },
  image: {
    width: '50px', // Adjust the size as needed
    height: 'auto',
  },
};

export default Logo;
