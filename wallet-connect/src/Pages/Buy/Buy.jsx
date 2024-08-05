import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import axios from 'axios';
import ComputerModel from '../../models/Computer';
import Earth from '../../models/Earth';
import Ethereum from '../../models/Ethereum';
import Bitcoin from '../../models/Bitcoin'; // Ensure this import path is correct
import Navbar from '../../components/Navbar/Navbar';
import Loader from '../../components/Loader/Loader';
import './Buy.css';
import { Line, Bar, Pie, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Buy = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [priceHistory, setPriceHistory] = useState(null);
  const [selectedChart, setSelectedChart] = useState('line');

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            sparkline: false,
          },
        });
        setCryptoData(response.data);
        setLastUpdated(new Date().toLocaleTimeString());
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();

    const intervalId = setInterval(fetchCryptoData, 60000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (selectedCrypto) {
      const fetchPriceHistory = async () => {
        try {
          const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${selectedCrypto.id}/market_chart`, {
            params: {
              vs_currency: 'usd',
              days: '7',
              interval: 'daily',
            },
          });

          const labels = response.data.prices.map(price => {
            const date = new Date(price[0]);
            return `${date.getMonth() + 1}/${date.getDate()}`;
          });

          const data = response.data.prices.map(price => price[1]);

          setPriceHistory({
            labels,
            datasets: [
              {
                label: 'Price (USD)',
                data,
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
              },
            ],
          });
        } catch (error) {
          console.error('Error fetching price history:', error);
        }
      };

      fetchPriceHistory();
    }
  }, [selectedCrypto]);

  useEffect(() => {
    const scrollToCharts = () => {
      const element = document.getElementById('detailsContainer');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (priceHistory) {
      scrollToCharts();
    }
  }, [priceHistory, selectedChart]);

  const handleCryptoClick = (coin) => {
    setSelectedCrypto(coin);
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="canvasContainer">
            <div className="buyContainer">
              <h2>Buy Crypto</h2>
              <form>
                <div className="form-group">
                  <input type="number" id="spend" name="spend" placeholder="Amount in USD" />
                  <label htmlFor="spend">Spend ($):</label>
                </div>
                <div className="form-group">
                  <input type="number" id="receive" name="receive" placeholder="Amount in Crypto" readOnly />
                  <label htmlFor="receive">Receive (Crypto):</label>
                </div>
                <button type="submit">Exchange</button>
              </form>
            </div>
            <Canvas shadows>
              <ambientLight intensity={2} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
              <pointLight position={[-10, -10, -10]} />
              <Suspense fallback={null}>
                <ComputerModel position={[-0.2, -1.3, 0]} rotation={[0.2, -0.7, 0]} scale={[1.5, 1.5, 1.5]} castShadow receiveShadow />
              </Suspense>
            </Canvas>
            <div className="sellContainer">
              <h2>Sell Crypto</h2>
              <form>
                <div className="form-group">
                  <input type="number" id="sellCrypto" name="sellCrypto" placeholder="Amount in Crypto" />
                  <label htmlFor="sellCrypto">Sell (Crypto):</label>
                </div>
                <div className="form-group">
                  <input type="number" id="receiveUSD" name="receiveUSD" placeholder="Amount in USD" readOnly />
                  <label htmlFor="receiveUSD">Receive ($):</label>
                </div>
                <button type="submit">Exchange</button>
              </form>
            </div>
          </div>
          <div className="canvasContainer">
            <div className="cryptoContainer">
              <h2>Crypto Market Info {lastUpdated && `(Updated: ${lastUpdated})`}</h2>
              <ul>
                {cryptoData.map((coin) => (
                  <li key={coin.id} className="coin-item" onClick={() => handleCryptoClick(coin)}>
                    <span className="coin-arrow">&#9654;</span>
                    {coin.name}: ${coin.current_price}
                  </li>
                ))}
              </ul>
            </div>
            <Canvas shadows>
              <ambientLight intensity={2} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
              <pointLight position={[-10, -10, -10]} />
              <Suspense fallback={null}>
                <Earth position={[0, -1.3, 0]} rotation={[0, 0, 0]} scale={[0.07, 0.07, 0.07]} castShadow receiveShadow />
              </Suspense>
            </Canvas>
          </div>
          {selectedCrypto && (
            <div className="detailsContainer" id="detailsContainer">
              <div className="coin-details">
                {selectedCrypto.id === 'ethereum' && (
                  <div className="model-container">
                    <Canvas shadows>
                      <ambientLight intensity={6} />
                      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
                      <pointLight position={[-10, -10, -10]} />
                      <Suspense fallback={null}>
                        <Ethereum position={[0, -1, 0]} rotation={[0, 0, 0]} scale={[2, 2, 2]} castShadow receiveShadow />
                      </Suspense>
                    </Canvas>
                  </div>
                )}
                {selectedCrypto.id === 'bitcoin' && (
                  <div className="model-container">
                    <Canvas shadows>
                      <ambientLight intensity={6} />
                      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
                      <pointLight position={[-10, -10, -10]} />
                      <Suspense fallback={null}>
                      {console.log('Rendering Bitcoin model')}
                        <Bitcoin position={[-5, 0, 0]} rotation={[0, 0, 0]} scale={[1,1,1]} castShadow receiveShadow />
                      </Suspense>
                    </Canvas>
                  </div>
                )}
                <h2>{selectedCrypto.name}</h2>
                <p>Current Price: ${selectedCrypto.current_price}</p>
                <p>Market Cap: ${selectedCrypto.market_cap}</p>
                <p>24h Change: {selectedCrypto.price_change_percentage_24h}%</p>
              </div>
              <div className="chartsContainer">
                <div className="chartSelector">
                  <label htmlFor="chartSelect">Choose a chart:</label>
                  <select
                    id="chartSelect"
                    value={selectedChart}
                    onChange={(e) => setSelectedChart(e.target.value)}
                  >
                    <option value="line">Line Chart</option>
                    <option value="bar">Bar Chart</option>
                    <option value="pie">Pie Chart</option>
                    <option value="radar">Radar Chart</option>
                  </select>
                </div>
                {priceHistory && selectedChart === 'line' && (
                  <>
                    <h3>Price History (Last 7 Days)</h3>
                    <Line data={priceHistory} />
                  </>
                )}
                {priceHistory && selectedChart === 'bar' && (
                  <>
                    <h3>Market Cap and Volume</h3>
                    <Bar
                      data={{
                        labels: ['Market Cap', '24h Volume'],
                        datasets: [
                          {
                            label: 'Value',
                            data: [selectedCrypto.market_cap, selectedCrypto.total_volume],
                            backgroundColor: ['rgba(75,192,192,0.2)', 'rgba(153,102,255,0.2)'],
                            borderColor: ['rgba(75,192,192,1)', 'rgba(153,102,255,1)'],
                            borderWidth: 1,
                          },
                        ],
                      }}
                      options={{
                        scales: {
                          y: {
                            beginAtZero: true,
                          },
                        },
                      }}
                    />
                  </>
                )}
                {priceHistory && selectedChart === 'pie' && (
                  <>
                    <h3>Market Share (Pie)</h3>
                    <Pie
                      data={{
                        labels: ['Market Cap', 'Volume'],
                        datasets: [
                          {
                            data: [selectedCrypto.market_cap, selectedCrypto.total_volume],
                            backgroundColor: ['rgba(75,192,192,0.2)', 'rgba(153,102,255,0.2)'],
                            borderColor: ['rgba(75,192,192,1)', 'rgba(153,102,255,1)'],
                            borderWidth: 1,
                          },
                        ],
                      }}
                    />
                  </>
                )}
                {priceHistory && selectedChart === 'radar' && (
                  <>
                    <h3>Performance Metrics (Radar)</h3>
                    <Radar
                      data={{
                        labels: ['Price Change (24h)', 'Market Cap', 'Total Volume'],
                        datasets: [
                          {
                            label: 'Metrics',
                            data: [
                              selectedCrypto.price_change_percentage_24h,
                              selectedCrypto.market_cap,
                              selectedCrypto.total_volume,
                            ],
                            backgroundColor: 'rgba(75,192,192,0.2)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderWidth: 1,
                          },
                        ],
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Buy;