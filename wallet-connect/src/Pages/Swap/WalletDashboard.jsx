import React from 'react';
import { useAccount, useBalance, useDisconnect, useEnsName } from 'wagmi';

const WalletDashboard = () => {
  const { address, isConnected, connector } = useAccount();
  const { data: balanceData } = useBalance({
    addressOrName: address,
    watch: true,
  });
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });

  if (!isConnected) {
    return <div className="wallet-dashboard">Please connect your wallet.</div>;
  }

  // Manual network mapping based on chainId if necessary
  const networkMapping = {
    1: 'Ethereum Mainnet',
    3: 'Ropsten',
    4: 'Rinkeby',
    5: 'Goerli',
    42: 'Kovan',
    137: 'Polygon Mainnet',
    80001: 'Polygon Mumbai',
    // Add more networks as needed
  };

  const chainId = connector?.chains?.[0]?.id;
  const networkName = networkMapping[chainId] || `Unknown Network (ID: ${chainId})`;

  return (
    <div className="wallet-dashboard">
      <div className="tooltip-text">Wallet Dashboard</div>
      <h3>Wallet Dashboard</h3>

      {ensName && (
        <p><strong>ENS Name:</strong> {ensName}</p>
      )}

      <p><strong>Address:</strong> {address}</p>

      <p><strong>Balance:</strong> {balanceData?.formatted} {balanceData?.symbol}</p>

      {chainId && (
        <p><strong>Network:</strong> {networkName}</p>
      )}

      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  );
};

export default WalletDashboard;
