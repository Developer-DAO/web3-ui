import React from 'react';
import { Web3Context } from '../Provider';
import { Contract } from 'ethers';

export function useContract(address: string, abi) {
  const context = React.useContext(Web3Context);
  const [contract, setContract] = React.useState({});
  React.useEffect(() => {
    if (context) {
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
    }
  }, [context]);
  return contract;
}
