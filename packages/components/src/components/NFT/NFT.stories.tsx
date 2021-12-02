import { storiesOf } from '@storybook/react';
import React from 'react';
import { NFT } from '.';

storiesOf('NFT', module).add('Renders an NFT', () => (
  <NFT
    tokenId='1'
    name='Dev #1'
    imageUrl='https://storage.opensea.io/files/acef01b1f111088c40a0d86a4cd8a2bd.svg'
    assetContractName='Devs for Revolution'
    assetContractSymbol='DEVS'
  />
));
