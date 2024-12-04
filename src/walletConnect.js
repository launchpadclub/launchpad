import React, { useState } from 'react';

function WalletConnect() {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    const wallet = window.solana;
    if (wallet && wallet.isPhantom) {
      await wallet.connect();
      setWalletAddress(wallet.publicKey.toString());
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>
        {walletAddress ? 'Connected' : 'Connect Wallet'}
      </button>
      {walletAddress && <p>Wallet Address: {walletAddress}</p>}
    </div>
  );
}

export default WalletConnect;