import { Contract, ContractInterface } from 'ethers';
import React, { useContext, useEffect } from 'react';
import { Web3Context } from '..';

/*
 * @dev returns a read-only contract instance. You need to pass in a readOnlyProviderUrl to the Provider in order for this to work. 
        Does not need a wallet connection / signer to function.
 * @param address - The contract address
 * @param abi - The contract ABI
 */
export function useReadOnlyContract(address: string, abi: ContractInterface) {
  const context = useContext(Web3Context);
  const staticProvider = context?.staticProvider;

  const [contract, setContract] = React.useState<any>();
  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    if (staticProvider) {
      const contract = new Contract(address, abi, staticProvider);
      const contractInterface = Object.values(
        contract.interface.functions
      ).reduce((accumulator, funcFragment) => {
        return {
          ...accumulator,
          [funcFragment.name]: contract[funcFragment.name]
        };
      }, {});
      setContract(contractInterface);
      setIsReady(true);
    }
  }, [address, abi, staticProvider]);

  return [contract, isReady];
}
