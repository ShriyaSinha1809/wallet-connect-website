import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {  AppKitProvider } from '../src/config/Web3ModalProvider.tsx'; // Ensure the correct path
import { CharacterAnimationsProvider } from '../src/models/Contexts/CharcaterAnimation.jsx';
import CustomCursor from './components/CustomCursor.jsx'; // Ensure the correct path

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < AppKitProvider>
      <CharacterAnimationsProvider>
        <CustomCursor />
        <App />
      </CharacterAnimationsProvider>
    </ AppKitProvider>
  </React.StrictMode>
);
