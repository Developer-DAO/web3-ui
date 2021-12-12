import React from 'react';
import { CHAIN_ID_TO_NETWORK, NETWORKS } from '..';
import { Web3Context } from '../Provider';

/**
 * @dev Hook to get the current web3 context including information about the connection and other helper methods.
 */
export function useWallet() {
  const context = React.useContext(Web3Context);
  const [ens, setEns] = React.useState<string>();

  if (!context) {
    throw new Error('No Web3Context found');
  }

  const {
    connectWallet,
    disconnectWallet,
    userAddress,
    chainId,
    signer,
    connected,
    provider,
    correctNetwork,
  } = context;

  React.useEffect(() => {
    if (userAddress && provider && chainId === NETWORKS.mainnet) {
      provider.lookupAddress(userAddress).then((address) => {
        setEns(address as string);
      });
    }
  }, [userAddress, provider]);

  return {
    connectWallet,
    disconnectWallet,
    connection: {
      userAddress,
      network: CHAIN_ID_TO_NETWORK[chainId as number],
      signer,
      ens,
    },
    connected,
    provider,
    correctNetwork,
  };
}
