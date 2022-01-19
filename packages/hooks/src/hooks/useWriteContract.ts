import React from 'react';
import { Web3Context } from '../Provider';
import { Contract, ContractInterface } from 'ethers';

/**
 * @description
 * Defines the contract instance on `useState` hook
 */
export type ContractInstance<T extends Contract> = T | null;

/**
 * @description
 * The return type of the `useWriteContract` hook
 */
export type UseWriteContractHook<T extends Contract> = [
  ContractInstance<T> | null,
  boolean
];

/**
 * Gets an instance of a contract from its ABI and address.
 * @param address contract address
 * @param abi contract ABI
 * @returns {
 *   contract: An instance of the current contract
 *   isReady: True when the contract is ready to use, false otherwise.
 * }
 */
export function useWriteContract<T extends Contract>(
  address: string,
  abi: ContractInterface
): UseWriteContractHook<T> {
  const context = React.useContext(Web3Context);
  const [contract, setContract] = React.useState<ContractInstance<T>>(null);
  const [isReady, setIsReady] = React.useState(false);
  React.useEffect(() => {
    if (context?.connected) {
      const newContract = new Contract(
        address,
        abi,
        context.signer || undefined
      ) as T;
      setContract(newContract);
      setIsReady(true);
    }
  }, [context]);
  return [contract, isReady];
}
