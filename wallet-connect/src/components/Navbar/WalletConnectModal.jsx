import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './WalletConnectModal.module.css';

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
                    <div className={styles.leftside}>
                        <button className={styles.logoButton1} onClick={handleLogoClick}>
                            <img src="/MetaMask_Fox.svg" alt="Meta Mask Logo" className={styles.logo} />
                        </button>
                        <button className={styles.logoButton} onClick={handleLogoClick}>
                            <img src="/wallet-logo.svg" alt="Wallet Connect Logo" className={styles.logo} />
                        </button>
                        <button className={styles.logoButton2} onClick={handleLogoClick}>
                            <img src="/bnb-bnb-logo.svg" alt="Binance Logo" className={styles.logo} />
                        </button>
                        <button className={styles.logoButton3} onClick={handleLogoClick}>
                            <img src="/coinbase-wallet-logo.svg" alt="Coinbase Logo" className={styles.logo} />
                        </button>
                        <button className={styles.logoButton4} onClick={handleLogoClick}>
                            <img src="/trust-wallet-logo.svg" alt="Trust Wallet Logo" className={styles.logo} />
                        </button>
                        <button className={styles.logoButton5} onClick={handleLogoClick}>
                            <img src="/okx.svg" alt="OKX Logo" className={styles.logo} />
                        </button>
                    </div>
                    <div className={styles.rightside}>
                        <h4 className={styles.righttext}>Haven’t got a wallet yet?</h4>
                        <Link to="/blog" className={styles.howtolink}>
                            Learn How to Connect
                        </Link>
                    </div>
                    <button className={styles.closeButton} onClick={onClose}>×</button>
                </div>
            </div>
        </div>
    );
};

export default WalletConnectModal;
