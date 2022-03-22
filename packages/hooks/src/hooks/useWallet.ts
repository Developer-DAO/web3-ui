import { useContext, useEffect, useState } from 'react';
import { CHAIN_ID_TO_NETWORK, NETWORKS } from '..';
import { Web3Context } from '../Provider';
import { switchNetwork } from '../utils';

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
    if (network) switchNetwork(network);
  };

  return {
    connectWallet,
    disconnectWallet,
    error,
    connection: {
      userAddress,
      network: (CHAIN_ID_TO_NETWORK as { [key: number]: string })[
        chainId as number
      ],
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
