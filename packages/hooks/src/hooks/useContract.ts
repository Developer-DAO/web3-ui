import React from 'react';
import { Web3Context } from '../Provider';
import { Contract } from 'ethers';

/**
 * Gets an instance of a contract from its ABI and address.
 * @param address contract address
 * @param abi contract ABI
 * @returns {
 *   contract: An instance of the current contract
 *   isReady: True when the contract is ready to use, false otherwise.
 * }
 */

export function useContract(
  address: string, 
  abi
): [contract: any, isReady: boolean] {
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
