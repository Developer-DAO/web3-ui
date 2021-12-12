import React, { useContext, useEffect, useState } from 'react';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { TokenLogo } from './components/Logo';
import { useTokenBalance, Web3Context } from '@web3-ui/hooks/src';
import { ethers } from 'ethers';
import { ERC20ABI } from '@web3-ui/hooks/src/constants';

export interface TokenBalanceProps {
  tokenAddress: string;
  accountAddress: string;
  value: number;
  imgUrl?: string | undefined;
}

export const TokenBalance = (props: TokenBalanceProps) => {
  const { tokenAddress, accountAddress, value, imgUrl } = props;

  const web3Context = useContext(Web3Context);
  const provider = web3Context?.provider;

  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');

  const { balance, decimals } = useTokenBalance({ tokenAddress, accountAddress });

  useEffect(() => {
    getTokenNameAndSymbol();
  }, []);

  const calcBalance = () => {
    if (balance === undefined || decimals === undefined) {
      return 0;
    }
    return Number.parseFloat((Number.parseInt(balance) / 10 ** decimals).toFixed(3));
  };

  const calcValue = () => {
    const balance = calcBalance();
    return (balance * value).toFixed(3);
  };

  const getTokenNameAndSymbol = async () => {
    const contract = new ethers.Contract(tokenAddress, ERC20ABI, provider!);
    const name = await contract.name();
    const symbol = await contract.symbol();

    setName(name);
    setSymbol(symbol);
  };

  const Headline = (name: string) => (
    <Heading as='h3' size='sm'>
      {name}
    </Heading>
  );

  return (
    <Flex borderRadius='lg' borderWidth='1px' overflow='hidden' px='4' py='2'>
      <Box w='50px' pr='4'>
        {imgUrl ? <Image src={imgUrl} /> : <TokenLogo tokenContractAddress={tokenAddress} />}
      </Box>
      <Box flex='2'>
        {Headline(symbol)}
        <p>{name}</p>
      </Box>
      <Box flex='1'>
        {Headline('Balance')}
        <p>{calcBalance()}</p>
      </Box>
      <Box flex='1'>
        {Headline('Value')}
        <p>{calcValue()}</p>
      </Box>
    </Flex>
  );
};
