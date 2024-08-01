import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { FaExchangeAlt, FaShoppingCart, FaMoneyBillWave, FaWallet, FaBars } from 'react-icons/fa';
import styles from './Navbar.module.css';
import WalletConnectModal from './WalletConnectModal';
import Sonic from '../../models/Sonic';
import { Canvas } from '@react-three/fiber';

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      const links = document.querySelectorAll(`.${styles.navLinks} a`);
      links.forEach((link) => {
        link.setAttribute('data-text', link.textContent);
      });
    }
  }, [isMenuOpen]);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const eyes = document.querySelectorAll(`.${styles.eye}`);
    const updateEyesPosition = (e) => {
      eyes.forEach(eye => {
        const { left, top, width, height } = eye.getBoundingClientRect();
        const eyeCenterX = left + width / 2;
        const eyeCenterY = top + height / 2;
        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
        const distance = Math.min(Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY), width / 3);
        const pupil = eye.querySelector(`.${styles.pupil}`);
        pupil.style.transform = `translate(-50%, -50%) translate(${distance * Math.cos(angle)}px, ${distance * Math.sin(angle)}px)`;
      });
    };

    document.addEventListener('mousemove', updateEyesPosition);
    return () => {
      document.removeEventListener('mousemove', updateEyesPosition);
    };
  }, []);

  const renderLogo = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className={styles.char}>{char}</span>
    ));
  };

  return (
    <div className={styles.navbar}>
      <Link to="/home" className={styles.logoLink}>
        <div className={styles.logo}>{renderLogo('LOREM')}</div>
      </Link>

      <div className={styles.menuIcon} onClick={toggleMenu} aria-label="Toggle menu">
        <FaBars />
      </div>
      <div className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ''} ${isMenuOpen ? styles.noTyping : ''}`}>
        <Link to="/trade"><FaExchangeAlt /> Swap</Link>
        <Link to="/buy"><FaShoppingCart /> Buy</Link>
        <Link to="#"><FaMoneyBillWave /> Earn</Link>
        <Link to="#" className={styles.connectWallet} onClick={handleOpenModal}>
          <FaWallet /> Connect Wallet
        </Link>
      </div>
      <WalletConnectModal isOpen={isModalOpen} onClose={handleCloseModal} />

      <div className={styles.canvasContainer}>
        <Canvas shadows>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
          <pointLight position={[-10, -10, -10]} />
          <Suspense fallback={null}>
            <Sonic position={[-1, -1.5, 0]} rotation={[0, 0, 0]} scale={[2,2,2]} castShadow receiveShadow />
          </Suspense>
        </Canvas>
      </div>

      <div className={styles.eyesContainer}>
        <div className={styles.eye}>
          <div className={styles.pupil}></div>
        </div>
        <div className={styles.eye}>
          <div className={styles.pupil}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
