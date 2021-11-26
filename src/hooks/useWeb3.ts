import React from 'react';
import { Web3Context } from '..';

/**
 * @dev Hook to get the current web3 context inlcuding information about the connection and other helper methods.
 */
export function useWeb3() {
  const context = React.useContext(Web3Context);

  return {
    connectWallet: context?.connectWallet,
    disconnectWallet: context?.disconnectWallet,
    connection: {
      userAddress: context?.userAddress,
      network: context?.network,
      signer: context?.signer,
    },
  };
}
