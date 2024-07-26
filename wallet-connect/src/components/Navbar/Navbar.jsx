import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaExchangeAlt, FaShoppingCart, FaMoneyBillWave, FaWallet } from 'react-icons/fa';
import WalletConnectModal from './WalletConnectModal'; // Import the modal component

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

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
      <div className={styles.logo}><h2>LOREM</h2></div>
      
      <div className={styles.navLinksSidebar} >
        <Link to="/trade"><FaExchangeAlt /> Trade</Link>
        <Link to="#"><FaShoppingCart /> Buy</Link>
        <Link to="#"><FaMoneyBillWave /> Earn</Link>
        <Link to="#" className={styles.connectWalletside} onClick={handleOpenModal}>
          <FaWallet /> Connect Wallet
        </Link>
      </div> 

      <div className={styles.navLinks}>
     
        
        <Link to="/trade"> <FaExchangeAlt /> Trade</Link>
        <Link to="#"> <FaShoppingCart /> Buy</Link>
        <Link to="#"> <FaMoneyBillWave /> Earn</Link>
        <Link to="#" className={styles.connectWallet} onClick={handleOpenModal}>
          <FaWallet /> Connect Wallet
        </Link>
        <Link><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></Link>
      </div>
      
      <WalletConnectModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Navbar;
