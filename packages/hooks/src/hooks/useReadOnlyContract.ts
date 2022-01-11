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
  const readOnlyProvider = context?.readOnlyProvider;

  const [contract, setContract] = React.useState<any>();
  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    if (readOnlyProvider) {
      const contract = new Contract(address, abi, readOnlyProvider);
      const contractInterface = Object.values(
        contract.interface.functions
      ).reduce((accumulator, funcFragment) => {
        return {
          ...accumulator,
          [funcFragment.name]: contract[funcFragment.name],
        };
      }, {});
      setContract(contractInterface);
      setIsReady(true);
    }
  }, [address, abi, readOnlyProvider]);

  return [contract, isReady];
}
