import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // Hide the welcome message after 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="home-container">
      <div className={`background-image ${showWelcome ? 'blurred' : ''}`}></div>
      {showWelcome && (
        <div className="welcome-text">
          Welcome
        </div>
      )}
      {!showWelcome && (
        <div className="navbar-container">
          <Navbar />
        </div>
      )}
      <div className="foreground-image"></div>
    </div>
  );
};

export default Home;
