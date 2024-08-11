import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Web3ModalProvider } from '../src/config/Web3ModalProvider.tsx'; // Ensure the correct path
import { CharacterAnimationsProvider } from '../src/models/Contexts/CharcaterAnimation.jsx';
import CustomCursor from './components/CustomCursor.jsx'; // Ensure the correct path

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Web3ModalProvider>
      <CharacterAnimationsProvider>
        <CustomCursor />
        <App />
      </CharacterAnimationsProvider>
    </Web3ModalProvider>
  </React.StrictMode>
);
