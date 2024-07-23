import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="background-image"></div>
      <div className="foreground-image"></div>
    </div>
  );
};

export default Home;
