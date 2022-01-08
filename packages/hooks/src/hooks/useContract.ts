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
 * The return type of the `useContract` hook
 */
export type UseContractHook<T extends Contract> = [
  ContractInstance<T> | null,
  boolean
];

export function useContract<T extends Contract>(
  address: string,
  abi: ContractInterface
): UseContractHook<T> {
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
