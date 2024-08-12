import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Trade.css';
import Malamal from '../../models/Malamal'; 
import Lamp from '../../models/Lamp';
import Truck from '../../models/Truck';

import { Plane } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/web';
import GifImage from '../../../public/pixil-gif-drawing (7).gif'; // Update this path
import Barrier from '../../models/barrier';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

const Background = () => {
    return (
        <Plane args={[100, 100]} position={[0, -23, -5]} rotation={[-Math.PI / 2, 0, 0.5]}>
            <meshStandardMaterial attach="material" color="#9e6634" />
        </Plane>
    );
};

const Trade = () => {
    const [props, set] = useSpring(() => ({
        transform: 'translate3d(0px, 0px, 0px)',
        config: { mass: 1, tension: 170, friction: 26 }
    }));

    const [loading, setLoading] = useState(true); // Loader state
    const [bitcoinPrice, setBitcoinPrice] = useState(null);
    const [swapAmount, setSwapAmount] = useState('');
    const [swapCoin, setSwapCoin] = useState('ethereum'); // Default swap option

    useEffect(() => {
        // Fetch Bitcoin price from CoinGecko API
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano&vs_currencies=usd')
            .then(response => response.json())
            .then(data => setBitcoinPrice(data.bitcoin.usd))
            .catch(error => console.error('Error fetching Bitcoin price:', error));
    }, []);

    const handleMouseMove = (event) => {
        const { clientX, clientY, innerWidth, innerHeight } = event;
        const x = (clientX / innerWidth - 0.5) * 30;
        const y = (clientY / innerHeight - 0.5) * 30;
        set({ transform: `translate3d(${x}px, ${y}px, 0px)` });
    };

    const handleSwap = () => {
        alert(`Swapping ${swapAmount} Bitcoin to ${swapCoin}`);
    };

    return (
        <div className="trade-page">
            <Navbar />
            <section className="trade-container" onMouseMove={handleMouseMove}>
                {loading && (
                    <div className="loader">
                        <div></div> {/* Loader content */}
                    </div>
                )}
                <animated.div style={props} className={`canvas-container ${loading ? 'hidden' : ''}`}>
                    <Canvas
                        shadows
                        camera={{ position: [0, 5, 10], fov: 45 }}
                        className="canvas-element"
                        onCreated={({ gl }) => {
                            setLoading(false); // Hide loader when Canvas is created
                            gl.setSize(window.innerWidth, window.innerHeight); // Resize canvas
                        }}
                    >
                        <ambientLight intensity={1} />
                        <directionalLight
                            position={[0, 10, 5]}
                            intensity={6}
                            castShadow
                            shadow-mapSize-width={4096}
                            shadow-mapSize-height={4096}
                            shadow-camera-far={50}
                            shadow-camera-left={-10}
                            shadow-camera-right={10}
                            shadow-camera-top={10}
                            shadow-camera-bottom={-10}
                        />
                        <directionalLight
                            position={[-5, 5, -5]}
                            intensity={3}
                            castShadow
                        />
                        <spotLight
                            position={[5, 10, 0]} 
                            angle={0.3} 
                            intensity={10} 
                            penumbra={1} 
                            castShadow
                            target-position={[2, 2, -5]}
                        />
                        <spotLight
                            position={[2, 5, 2]} 
                            angle={0.2} 
                            intensity={10} 
                            penumbra={1} 
                            castShadow
                        />
                        <group position={[0, -0.5, 0]}>
                            <Background />
                            <Malamal position={[2, 1, 0]} rotation={[-0.1, 5.2, 0]} scale={[0.6, 0.6, 0.6]} />
                            <Lamp position={[5.5, 0.4, 0]} rotation={[-0.1, 0.4, 0]} scale={[0.6, 0.6, 0.6]} />
                            <Truck position={[5.8, 0.8, 0]} rotation={[-0.1, 0.4, 0]} scale={[0.6, 0.6, 0.6]} />
                        </group>
                    </Canvas>
                    <div className="white-background"></div>
                </animated.div>
            </section>

            <section className="bitcoin-swap-section">
                <div className="flex-column-container">
                    {/* <div className="model-container">
                        <Canvas shadows>
                            <ambientLight intensity={6} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
                            <pointLight position={[-10, -10, -10]} />
                        
                            {console.log('Rendering Bitcoin model')}
                            <Barrier position={[-3, -1, 0]} rotation={[0, -0.3, 0]} scale={[2,2,2]} castShadow receiveShadow />
                        
                        </Canvas>
                    </div> */}
                    {bitcoinPrice ? (
                        <div className="swap-container pixelated-3d">
                            <input
                                type="number"
                                value={swapAmount}
                                onChange={(e) => setSwapAmount(e.target.value)}
                                placeholder="Amount in Bitcoin"
                                className="swap-input"
                            />
                            <select
                                value={swapCoin}
                                onChange={(e) => setSwapCoin(e.target.value)}
                                className="swap-select"
                            >
                                <option value="ethereum">Ethereum</option>
                                <option value="cardano">Cardano</option>
                                <option value="litecoin">Litecoin</option>
                                {/* Add more options as needed */}
                            </select>
                            <button onClick={handleSwap} className="swap-button">
                                Swap Bitcoin
                            </button>
                        </div>
                    ) : (
                        <p>Loading Bitcoin price...</p>
                    )}
                </div>
            </section>

            {/* Adding the GIF in white space */}
          
        </div>
    );
};

export default Trade;
