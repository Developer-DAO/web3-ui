import React, { useContext } from 'react';
import { ethers } from 'ethers';
import { Web3Context } from '../../Provider';
import ERC20 from './ERC20ABI.json';

/**
 * @param contractAddress -> the address of the ERC20 token contract
 * @param ownerAddress -> the address of the owner which balance should be fetched

 */
export const useTokenBalance = (contractAddress: string, ownerAddress: string) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [balance, setBalance] = React.useState<string>();
  const [errorMsg, setErrorMsg] = React.useState(false);

  const { provider } = useContext(Web3Context);

  React.useEffect(() => {
    getTokenBalance();
  });

  const getTokenBalance = async () => {
    if (provider === undefined) {
      setErrorMsg(
        'provider is undefined. Please make sure to you the hook within the Web3Context Provider '
      );
      setIsLoading(false);
      return;
    }
    try {
      const contract = new ethers.Contract(contractAddress, ERC20, provider);
      const balanceFuture = contract.balanceOf(ownerAddress);
      const decimalsFuture = contract.decimals();

      const [resolvedBalance, resolvedDecimals] = await Promise.all([
        balanceFuture,
        decimalsFuture,
      ]);

      const balanceAsNumber = Number.parseInt(resolvedBalance);
      const displayBalance = (balanceAsNumber / 10 ** resolvedDecimals).toFixed(3);

      setBalance(displayBalance);
      setIsLoading(false);
    } catch (e) {
      setErrorMsg(e);
      setIsLoading(false);
    }
  };

  return [isLoading, balance, errorMsg];
};
