import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cloudsIn, setCloudsIn] = useState(false);
  const [cloudsOut, setCloudsOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4000); // Hide the welcome message after 4 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const handleScroll = () => {
    setIsAnimating(true);
    setCloudsIn(true);

    setTimeout(() => {
      const cityGifSection = document.getElementById('city-gif');
      if (cityGifSection) {
        cityGifSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500); // Scroll after clouds have entered

    setTimeout(() => {
      setCloudsOut(true);
    }, 1000); // Start cloud exit animation

    setTimeout(() => {
      setIsAnimating(false);
      setCloudsIn(false);
      setCloudsOut(false);
    }, 1500); // Reset after animation
  };

  return (
    <>
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
        <div className="scroll-arrow" onClick={handleScroll}>
          <img src="/src/assets/next.png" alt="Scroll Down Arrow" />
        </div>
        {isAnimating && (
          <>
            <div className={`cloud left-cloud ${cloudsOut ? 'left-cloud-exit' : ''}`}>
              <img src='/src/assets/clouds.webp'></img>
            </div>
            <div className={`cloud right-cloud ${cloudsOut ? 'right-cloud-exit' : ''}`}>
            <img src='/src/assets/clouds.webp'></img>
            </div>
          </>
        )}
      </div>
      <div className="city-gif" id="city-gif">
        <img src="/src/assets/6581883.gif" alt="City GIF" />
        <div className="text-container">
          <h2>Swap Your Way to Crypto Freedom</h2>
        </div>
        <div className="button-container">
          <button type="button" className="custom-button">
            <div className="inner-div">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#000000"
                  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                ></path>
                <path
                  fill="#000000"
                  d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                ></path>
              </svg>
            </div>
            <p>Swaps</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
