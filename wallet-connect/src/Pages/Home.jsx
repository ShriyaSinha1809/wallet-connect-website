import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Home.css'; // Assuming the CSS file is in the same directory

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="hero-section">
        <div className="news">
          <h1>
            World’s Most
            <br />
            <span className="trusted">TRUSTED</span> DEX
          </h1>
          <p>Earn, trade, swap, and buy all-in-one</p>
        </div>
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
    </>
  );
};

export default Home;
