import React from 'react';
import styles from './PixelModal.module.css';
import walletConnectLogo from '../../assets/walletConnectLogo.jpeg';

const PixelModal = ({ onClose, onConnect }) => {
  return (
    <>
      <div className={styles.pixelModalOverlay} onClick={onClose} />
      <div className={styles.pixelModal}>
        <img src={walletConnectLogo} alt="Wallet Connect" className={styles.pixelModalLogo} />
        <div className={styles.pixelModalButton} onClick={onConnect}>
          Connect Wallet
        </div>
      </div>
    </>
  );
};

export default PixelModal;
