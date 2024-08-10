import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar'; // Ensure this path is correct
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

  return (
    <>
      {/* Welcome Message */}
      {showWelcome && (
        <div className="welcome-text">
          Welcome
        </div>
      )}
      
      {/* Navbar */}
      <Navbar />
      <div className="home-container">
        {/* Header Section */}
        <div className="header-wrapper">
          <header className="header">
            <div className="title">
              <h1>World's Most <span className="trusted">TRUSTED</span> DEX</h1>
              <p>earn, trade, swap and buy all-in-one</p>
            </div>
            <div className="model">model</div>
          </header>
        </div>
        {/* Ecosystem Section */}
        <section className="ecosystem">
          <h2>DISCOVER OUR ECOSYSTEM</h2>
          <div className="features">
            <div className="feature-swap">
              <img src="swap-icon.png" alt="Swap" />
              <h3>SWAP</h3>
              <p>Trade crypto instantly across multiple chains</p>
            </div>
            <div className="feature-liq">
              <img src="liquidity-icon.png" alt="Liquidity" />
              <h3>LIQUIDITY</h3>
              <p>Fund liquidity pools, earn trading fees</p>
            </div>
            <div className="feature-buy">
              <img src="buy-crypto-icon.png" alt="Buy Crypto" />
              <h3>BUY CRYPTO</h3>
              <p>Buy crypto with your preferred currency and payment method</p>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="footer">
          <h2>JOIN EVERYONE'S FAVOURITE DEX NOW!</h2>
          <p>Experience the power of community ownership, global governance, and explore infinite use cases within the PancakeSwap ecosystem</p>
          <button className='tradebutton'>TRADE NOW</button>
          <div className="footer-links">
            <div className="column">
              <h3>ECOSYSTEM</h3>
              <ul>
                <li>trade</li>
                <li>earn</li>
                <li>game</li>
                <li>NFT</li>
                <li>Merchandise</li>
              </ul>
            </div>
            <div className="column">
              <h3>BUSINESS</h3>
              <ul>
                <li>IFO</li>
                <li>NFT Marketplace</li>
              </ul>
            </div>
            <div className="column">
              <h3>DEVELOPERS</h3>
              <ul>
                <li>contributing</li>
                <li>GitHub</li>
                <li>Bug bounty</li>
                <li>V4</li>
              </ul>
            </div>
            <div className="column">
              <h3>SUPPORT</h3>
              <ul>
                <li>Contact</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div className="column">
              <h3>ABOUT</h3>
              <ul>
                <li>Terms of services</li>
                <li>Blog</li>
                <li>Brand Assets</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
          <div className="social-icons">
            <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
            <a href="#"><img src="twitter-icon.png" alt="Twitter" /></a>
            <a href="#"><img src="instagram-icon.png" alt="Instagram" /></a>
            <a href="#"><img src="linkedin-icon.png" alt="LinkedIn" /></a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
