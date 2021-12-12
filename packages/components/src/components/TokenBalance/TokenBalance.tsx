import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { TokenLogo } from './components/Logo';
import { useTokenBalance } from '@web3-ui/hooks/src';

export interface TokenBalanceProps {
  name: string;
  symbol: string;
  tokenAddress: string;
  accountAddress: string;
  value: number;
  imgUrl?: string | undefined;
}

export const TokenBalance = (props: TokenBalanceProps) => {
  const { name, symbol, tokenAddress, accountAddress, value, imgUrl } = props;
  const Headline = (name: string) => (
    <Heading as='h3' size='sm'>
      {name}
    </Heading>
  );

  const { balance, decimals } = useTokenBalance({ tokenAddress, accountAddress });

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

  return (
    <Flex borderRadius='lg' borderWidth='1px' overflow='hidden' px='4' py='2'>
      <Box w='50px' pr='4'>
        <TokenLogo tokenContractAddress={tokenAddress} />
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
