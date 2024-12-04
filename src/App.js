import React from 'react';
import WalletConnect from './WalletConnect';
import CreateToken from './CreateToken';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Launchpad</h1>
      <WalletConnect />
      <CreateToken />
      <Footer />
    </div>
  );
}

export default App;