import React from 'react';
import { Web3ContextType } from '..';
import { Web3Context } from '../Provider';

/**
 * @dev Hook to get the current web3 context including information about the connection and other helper methods.
 */
export function useWallet() {
  const context = React.useContext(Web3Context);
  const { connectWallet, disconnectWallet, userAddress, provider, network, signer, connected } =
    context as Web3ContextType;
  const [ens, setEns] = React.useState<string>();

  React.useEffect(() => {
    if (userAddress && provider) {
      provider.lookupAddress(userAddress).then((address) => {
        setEns(address as string);
      });
    }
  }, [userAddress, provider]);

  return {
    connectWallet,
    disconnectWallet,
    connection:
      context && connected
        ? {
            userAddress,
            network,
            signer,
            ens,
          }
        : null,
    connected,
    provider: provider,
  };
}
