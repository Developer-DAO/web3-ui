import React from 'react';
import { Web3Context } from '../Provider';

/**
 * @dev Hook to get the current web3 context inlcuding information about the connection and other helper methods.
 */
export function useWallet() {
  const context = React.useContext(Web3Context);
  const [ens, setEns] = React.useState<string>();

  React.useEffect(() => {
    if (context) {
      const { userAddress, provider } = context;
      if (userAddress && provider) {
        provider.lookupAddress(userAddress).then((address) => {
          setEns(address as string);
        });
      }
    }
  }, [context?.userAddress, context?.provider]);

  return {
    connectWallet: context?.connectWallet,
    disconnectWallet: context?.disconnectWallet,
    connection: {
      userAddress: context?.userAddress,
      network: context?.network,
      signer: context?.signer,
      ens,
    },
    connected: context?.connected,
  };
}
