import { Box, Flex, FlexProps, Heading, Image } from '@chakra-ui/react';
import React from 'react';

export interface TokenBalanceProps {
  /**
   * The name of the ERC20 Token
   */
  name: string;
  /**
   * The symbol of the ERC20 Token
   */
  symbol: string;
  /**
   * The users balance
   */
  balance: number;
  /**
   * The balance USD value
   */
  value: string;
  /**
   * Image of the token (optional)
   */
  imgUrl?: string | undefined;
}

export const TokenBalance: React.FC<TokenBalanceProps & FlexProps> = (
  props
) => {
  const { name, symbol, balance, value, imgUrl } = props;

  const Headline = (name: string) => {
    return (
      <Heading as="h3" size="sm">
        {name}
      </Heading>
    );
  };

  return (
    <Flex
      borderRadius="lg"
      borderWidth="1px"
      overflow="hidden"
      px="4"
      py="2"
      {...props}
    >
      <Box w="50px" pr="4">
        <Image src={imgUrl} />
      </Box>
      <Box flex="2">
        {Headline(symbol)}
        <p>{name}</p>
      </Box>
      <Box flex="1">
        {Headline('Balance')}
        <p>{balance}</p>
      </Box>
      <Box flex="1">
        {Headline('Value')}
        <p>{value}</p>
      </Box>
    </Flex>
  );
};
