import React, { useContext } from 'react';
import { ethers } from 'ethers';
import { Web3Context } from '../../Provider';
import ERC20 from './ERC20.json';

export const useTokenBalance = (address: string, owner: string) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [balance, setBalance] = React.useState<null | string>(null);

  const { provider } = useContext(Web3Context);

  React.useEffect(() => {
    getTokenBalance();
  });

  const getTokenBalance = async () => {
    if (provider === undefined) {
      return;
    }
    const contract = new ethers.Contract(address, ERC20, provider);
    const balanceFuture = contract.balanceOf(owner);
    const decimalsFuture = contract.decimals();

    const [resolvedBalance, resolvedDecimals] = await Promise.all([balanceFuture, decimalsFuture]);

    const balanceAsNumber = Number.parseInt(resolvedBalance);
    const displayBalance = (balanceAsNumber / 10 ** resolvedDecimals).toFixed(3);

    setBalance(displayBalance);
    setIsLoading(false);
  };

  return [isLoading, balance];
};
