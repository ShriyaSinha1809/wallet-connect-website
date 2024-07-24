import React, { useEffect } from 'react';
import styles from './WalletConnectModal.module.css'; // CSS module for the modal

const WalletConnectModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
    return () => {
      body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleOutsideClick = (e) => {
    if (e.target.id === "modalBackground") {
      onClose();
    }
  };

  const handleLogoClick = () => {
    // Handle the button click action here
    console.log('Wallet logo clicked!');
  };

  return (
    <div
      id="modalBackground"
      className={`${styles.modalBackground} ${isOpen ? styles.open : ''}`}
      onClick={handleOutsideClick}
    >
      <div className={`${styles.modalContainer} ${isOpen ? styles.open : ''}`}>
        
        <div className={styles.content}>
          <button className={styles.logoButton} onClick={handleLogoClick}>
          <button className={styles.closeButton} onClick={onClose}>×</button>
            <img src="/wallet-logo.svg" alt="Wallet Connect Logo" className={styles.logo} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletConnectModal;
