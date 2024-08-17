import React from 'react';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { WagmiProvider } from 'wagmi';
import { arbitrum, mainnet } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './wallet.css';  // Apply global CSS styles

// Setup queryClient for React Query
const queryClient = new QueryClient();

// Get projectId from WalletConnect Cloud (https://cloud.walletconnect.com)
const projectId = '9c702d939dc8dcc1aa1c78f525f113d6'; // Replace with your actual project ID

// Metadata for Web3Modal
const metadata = {
  name: 'AppKit Example',
  description: 'AppKit Example Application',
  url: 'https://your-app-url.com', // Replace with your app's URL
  icons: ['https://your-app-url.com/path-to-your-icon.png'], // Replace with your app's icon URL
};

// Supported chains
const chains = [mainnet, arbitrum];

// Create Wagmi configuration
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

// Create Web3Modal
const web3Modal = createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - enable analytics if you want
});

// AppKitProvider component
export function AppKitProvider({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}

// ConnectButton component
export function ConnectButton() {
  return (
    <w3m-button>
      <span>Connect Wallet</span>
    </w3m-button>
  );
}
