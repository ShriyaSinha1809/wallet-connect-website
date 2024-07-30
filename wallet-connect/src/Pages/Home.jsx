import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(
    () => !localStorage.getItem('hasVisited')
  );

  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(false);
        localStorage.setItem('hasVisited', 'true'); // Mark as visited
      }, 4000); // Hide the welcome message after 4 seconds

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [showWelcome]);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
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
        <div className="scroll-arrow" onClick={() => handleScroll('city-gif')}>
          <p>Swipe Down</p>
          <img src="/src/assets/next.png" alt="Scroll Down Arrow" />
        </div>
      </div>
    
      <div className="city-gif" id="city-gif">
        <img src="/src/assets/6581883.gif" alt="City GIF" />

        <div className="scroll-arrow1" onClick={() => handleScroll('third-gif')}>
          <p>Swipe Down</p>
          <img src="/src/assets/next.png" alt="Scroll Down Arrow" />
        </div>
    
        <div className="text-container">
          <h2>Swap Your Way to Crypto Freedom</h2>
        </div>
        
        <div className="button-container">
          <button type="button" className="custom-button" onClick={() => handleScroll('third-gif')}>
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
      
      <div className="third-gif" id="third-gif">
        <img src="src/assets/yq8yumlorbbb1.gif" alt="Third GIF" />
        
        <div className="text-container">
          <h2>Welcome to the Next Stage</h2>
        </div>
      </div>

      <div className="footer-container">
        <img src="src/assets/hiring-pixel-art-animation-artist-snow-scenary-1-character-v0-wguo0stxo6mc1.gif" alt="Fourth GIF" />
      </div>
    </>
  );
};

export default Home;
