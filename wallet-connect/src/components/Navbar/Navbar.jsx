import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { FaExchangeAlt, FaShoppingCart, FaMoneyBillWave, FaWallet } from 'react-icons/fa';
import WalletConnectModal from './WalletConnectModal'; // Import the modal component

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll(`.${styles.navLinks} a`);
    links.forEach((link) => {
      link.setAttribute('data-text', link.textContent);
    });
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>LOREM</div>
      <div className={styles.navLinks}>
        <a href="#" className={styles.typed}><FaExchangeAlt /> Trade</a>
        <a href="#"><FaShoppingCart /> Buy</a>
        <a href="#"><FaMoneyBillWave /> Earn</a>
        <a href="#" className={styles.connectWallet} onClick={handleOpenModal}>
          <FaWallet /> Connect Wallet
        </a>
      </div>
      <WalletConnectModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Navbar;
