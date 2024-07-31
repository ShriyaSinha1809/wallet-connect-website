import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaExchangeAlt, FaShoppingCart, FaMoneyBillWave, FaWallet, FaBars } from 'react-icons/fa';
import styles from './Navbar.module.css';
import WalletConnectModal from './WalletConnectModal';

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

  return (
    <div className={styles.navbar}>
      <Link to="/home" className={styles.logoLink}>
        <div className={styles.logo}><h2>LOREM</h2></div>
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
    </div>
  );
};

export default Navbar;
