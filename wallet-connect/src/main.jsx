import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Web3ModalProvider } from '../src/config/Web3ModalProvider.tsx' // Ensure the correct path
import { CharacterAnimationsProvider } from '../src/models/Contexts/CharcaterAnimation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Web3ModalProvider>
      <CharacterAnimationsProvider>
      <App />
      </CharacterAnimationsProvider>
    </Web3ModalProvider>
  </React.StrictMode>
)
