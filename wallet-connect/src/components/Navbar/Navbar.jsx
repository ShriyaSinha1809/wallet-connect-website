import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import logo1 from '../../assets/logo1.png'; // Adjust the path according to your structure

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const typingRef = useRef(null);

  useEffect(() => {
    if (typingRef.current) {
      typingRef.current.classList.add(styles.typing);
    }
  }, []);

  const handleConnectWallet = () => {
    console.log('Connect Wallet button clicked!');
    // Add wallet connection logic here
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.brand}>
        <img src={logo1} alt="XYZ logo" className={styles.logo} />
        <span ref={typingRef}>XYZ</span>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
      <ul className={`${styles.navItems} ${isMenuOpen ? styles.navItemsMobile : ''}`}>
        <li className={`${styles.navItem} ${isMenuOpen ? styles.navItemMobile : ''}`}><a className={styles.navLink} href="#" >Trade</a></li>
        <li className={`${styles.navItem} ${isMenuOpen ? styles.navItemMobile : ''}`}><a className={styles.navLink} href="#">Buy</a></li>
        <li className={`${styles.navItem} ${isMenuOpen ? styles.navItemMobile : ''}`}><a className={styles.navLink} href="#">Earn</a></li>
        <li className={`${styles.navItem} ${isMenuOpen ? styles.navItemMobile : ''}`}><a className={styles.navLink} href="#">Game</a></li>
        <li className={`${styles.navItem} ${isMenuOpen ? styles.navItemMobile : ''}`}><a className={styles.navLink} href="#">NFT</a></li>
        <li className={`${styles.navItem} ${isMenuOpen ? styles.navItemMobile : ''}`}><a className={styles.navLink} href="#">v4</a></li>
      </ul>
      <div>
        <div className={styles.walletBalance}>
          <span role="img" aria-label="wallet">👛</span> $2.048
        </div>
        <button className={styles.button} onClick={handleConnectWallet}>Connect Wallet</button>
        <select className={styles.select}>
          <option value="bnb">BNB Chain</option>
          {/* Add more options as needed */}
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
