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
          <p>earn, trade, swap and buy all-in-one</p>
        </div>
      </div>

      <div className="ecosystem-section">
        <h2>DISCOVER OUR ECOSYSTEM</h2>
        <div className="features">
          <div className="feature">
            <img src="path/to/your/image1.png" alt="Swap Feature" />
            <h3>SWAP</h3>
            <p>Trade crypto instantly across multiple chains</p>
          </div>
       
        </div>
      </div>
    </>
  );
};

export default Home;
