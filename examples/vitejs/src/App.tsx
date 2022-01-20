import React, { useState, useEffect } from 'react';
import { Greeter } from '../types/contracts';
import GreeterABI from '../abis/Greeter.json';
import { ConnectWallet, useWallet, useWriteContract } from '@web3-ui/core';
import { NFTGallery } from '@web3-ui/components';
import { ethers } from 'ethers';
import './App.css';

function App() {
  // State / Props
  const [address, setAddress] = useState('');
  const [newGreeting, setNewGreeting] = useState('');
  const [retrievedGreeting, setRetrivedGreeting] = useState('');
  const [nftGallery, setNftGallery] = useState<any>(null);
  const {
    connected,
    provider,
    correctNetwork,
    switchToCorrectNetwork,
    connection,
  } = useWallet();
  const [greeterContract, isReady] = useWriteContract<Greeter>(
    // Rinkeby
    '0x7e1D33FcF1C6b6fd301e0B7305dD40E543CF7135',
    GreeterABI
  );

  // Hooks
  useEffect(() => {
    console.log('correctNetwork', correctNetwork);
  }, [correctNetwork]);

  // Functions
  const onChangeInputAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const onSubmitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNftGallery(
      <NFTGallery
        address={address}
        gridWidth={2}
        web3Provider={provider as ethers.providers.Web3Provider}
      />
    );
  };

  const onClickGreet = async () => {
    if (greeterContract && isReady) {
      const response = await greeterContract.greet();
      console.log('setGreeting', response);
      setRetrivedGreeting(response);
    }
  };

  const onClickSetGreet = async () => {
    if (greeterContract && isReady) {
      const response = await greeterContract.setGreeting(newGreeting);
      console.log('greet', response);
      setNewGreeting('');
    }
  };

  const onClickSwitchToCorrectNetwork = () => {
    switchToCorrectNetwork();
  };

  const onChangeGreeting = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewGreeting(event.target.value);
  };

  // Renders
  return (
    <div className="App">
      <header className="App-header">
        {connected ? (
          <small>Click the button again to disconnect the wallet.</small>
        ) : null}
        <p>
          <ConnectWallet />
        </p>

        {!correctNetwork && (
          <p>
            <button onClick={onClickSwitchToCorrectNetwork}>
              Switch to Mainnet
            </button>
          </p>
        )}

        {connected ? (
          <div>
            <p>
              <strong>Current Network:</strong>{' '}
              <code>{connection?.network ?? 'Unknown'}</code>
            </p>
            <blockquote>
              ⚠️ Contract functions to be used on network: <code>rinkeby</code>{' '}
            </blockquote>
            <p>
              <input
                type="text"
                placeholder="New Greeting"
                value={newGreeting}
                onChange={onChangeGreeting}
              />
            </p>
            <p>
              <button onClick={onClickSetGreet}>Set Greeting</button>
            </p>
            <p>
              <button onClick={onClickGreet}>Greet</button>
            </p>
            {retrievedGreeting ? (
              <p>
                Retrived greeting: <code>{retrievedGreeting}</code>
              </p>
            ) : null}
          </div>
        ) : null}

        <h1>Demo</h1>

        <p>Type in an address to view their NFTs</p>
        <form onSubmit={onSubmitForm}>
          <p>
            <input
              disabled={!connected}
              type="text"
              placeholder="Address"
              value={address}
              onChange={onChangeInputAddress}
            />
          </p>
          <p>
            <button type="submit" disabled={!connected}>
              {connected ? 'Search' : 'Connect your wallet first!'}
            </button>
          </p>
        </form>

        {nftGallery}
      </header>
    </div>
  );
}

export default App;
