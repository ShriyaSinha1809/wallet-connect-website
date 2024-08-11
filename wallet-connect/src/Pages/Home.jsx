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
          <p>Earn, Trade, Swap and Buy all-in-one</p>
        </div>
      </div>

      <div className="ecosystem-section">
        <h2>DISCOVER OUR ECOSYSTEM</h2>

        <div className="features">
          <div className="feature1">
            <div className="f1img">
            <img src="path/to/your/image1.png" alt="Swap Feature" />
            </div>
            <div className="f1info">
            <h3>SWAP</h3>
            <p>Trade crypto instantly across multiple chains.</p>
            </div>
          </div>

          <div className="feature1">
            <div className="f2info">
            <h3>LIQUIDITY</h3>
            <p>Fund liquidity pools, earn trading fees.</p>
            </div>
            <div className="f2img">
            <img src="path/to/your/image2.png" alt="Swap Feature" />
          </div>
          </div>

          <div className="feature1">
            <div className="f3img">
            <img src="path/to/your/image3.png" alt="Swap Feature" />
            </div>
            <div className="f3info">
            <h3>BUY CRYPTO</h3>
            <p>Buy crypto with your choice of </p>
            <p>currnecy and payment method.</p>
            </div>
          </div>
       
        </div>
      </div>
    </>
  );
};

export default Home;
