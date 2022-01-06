import React from 'react';
import { Web3Context } from '../Provider';
import { Contract } from 'ethers';

/**
 * @dev Hook to use a contract
 * @param {string} address contract address
 * @param {string} accountAddress contract ABI
 * @returns {
 * contract {string}: Current contract in use
 * isReady {boolean}: True when contract is set, false otherwise.
 * }
 */

export function useContract(address: string, abi) {
  const context = React.useContext(Web3Context);
  const [contract, setContract] = React.useState({});
  const [isReady, setIsReady] = React.useState(false);
  React.useEffect(() => {
    if (context?.connected) {
      const newContract = new Contract(
        address,
        abi,
        context.signer || undefined
      );
      const contractInterface = Object.values(
        newContract.interface.functions
      ).reduce((accumulator, funcFragment) => {
        return {
          ...accumulator,
          [funcFragment.name]: newContract[funcFragment.name]
        };
      }, {});
      setContract(contractInterface);
      setIsReady(true);
    }
  }, [context]);
  return [contract, isReady];
}
