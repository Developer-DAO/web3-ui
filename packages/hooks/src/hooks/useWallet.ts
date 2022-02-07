import { useContext, useEffect, useState } from 'react';
import { CHAIN_ID_TO_NETWORK, NETWORKS } from '..';
import { Web3Context } from '../Provider';

/**
 * @dev Hook to get the current web3 context including information about the connection and other helper methods.
 */
export function useWallet() {
  const context = useContext(Web3Context);
  const [ens, setEns] = useState<string>();

  if (!context) {
    throw new Error('No Web3Context found');
  }

  const {
    connectWallet,
    disconnectWallet,
    userAddress,
    chainId,
    error,
    signer,
    connected,
    provider,
    correctNetwork,
    network,
    readOnlyProvider,
  } = context;

  useEffect(() => {
    if (userAddress && provider && chainId === NETWORKS.mainnet) {
      provider.lookupAddress(userAddress).then((address) => {
        setEns(address as string);
      });
    }
  }, [userAddress, provider]);

  const switchToCorrectNetwork = async () => {
    if (window.ethereum) {
      try {
        console.log('chainId', { chainId });
        console.log('requiredNetwork', { network });
        // check if the chain to connect to is installed
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: `0x${network}` }], // chainId must be in hexadecimal numbers
        });
      } catch (error) {
        console.error(error);
        // This error code indicates that the chain has not been added to MetaMask.
        // If it is not, then install it into the user's MetaMask
        // @ts-expect-error unknown error type
        if (error.code === 4902) {
          alert('Please add the network to your MetaMask');
        }
      }
    } else {
      // if window.ethereum is undefined then MetaMask is not installed
      alert(
        'Switching networks automatically is only supported in MetaMask. Please consider installing it: https://metamask.io/download.html'
      );
    }
  };

  return {
    connectWallet,
    disconnectWallet,
    error,
    connection: {
      userAddress,
      network: CHAIN_ID_TO_NETWORK[chainId as number],
      signer,
      ens,
    },
    connected,
    provider,
    correctNetwork,
    switchToCorrectNetwork,
    readOnlyProvider,
  };
}
