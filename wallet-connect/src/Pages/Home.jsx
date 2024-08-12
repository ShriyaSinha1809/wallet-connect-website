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
              <p>Buy crypto with your choice of</p>
              <p>currency and payment method.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Added the animated scrolling text */}
      <div className="table center">
        <div className="monitor-wrapper center">
          <div className="monitor center">
            <p>🪙 🟡 Crypto trading: where strategy meets the thrill of the digital frontier! 🪙 🟡</p>
          </div>
        </div>

        

      </div>

      <div className='join-page'>
            <h1>JOIN EVERYONES <span className='favourite'>FAVOURITE </span>NOW !</h1>
            <br></br>
            <p>Experience the power of community ownership, global governance, and explore infinite use cases within the PancakeSwap ecosystem</p>
            
            <button className='trade-button'><h2>TRADE NOW</h2></button>
      </div>
    </>
  );
};

export default Home;
