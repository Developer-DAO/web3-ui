import React from 'react';
import { Image } from '@chakra-ui/react';

export const TokenLogo = ({ tokenContractAddress }) => (
  <Image
    src={`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${tokenContractAddress}/logo.png`}
  />
);

//i.E. Dai
//https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png
