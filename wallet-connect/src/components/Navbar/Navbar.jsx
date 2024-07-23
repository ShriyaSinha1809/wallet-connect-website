import React, { useEffect } from 'react';
import styles from './Navbar.module.css'; // Using CSS Modules for scoped styling
import { FaExchangeAlt, FaShoppingCart, FaMoneyBillWave, FaWallet } from 'react-icons/fa'; // Importing icons

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll(`.${styles.navLinks} a`);
    links.forEach((link) => {
      link.setAttribute('data-text', link.textContent);
    });
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>LOREM</div>
      <div className={styles.navLinks}>
        <a href="#" className={styles.typed}> <FaExchangeAlt /> Trade</a>
        <a href="#"><FaShoppingCart /> Buy</a>
        <a href="#"><FaMoneyBillWave /> Earn</a>
        <a href="#" className={styles.connectWallet}>
          <FaWallet /> Connect Wallet
        </a>
      </div>
    </div>
  );
};

export default Navbar;
