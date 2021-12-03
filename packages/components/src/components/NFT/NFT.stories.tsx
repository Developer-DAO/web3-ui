import React from 'react';
import { NFT } from '.';

storiesOf('NFT', module).add('Renders an NFT', () => (
  <NFT tokenId='1' contractAddress='0x25ed58c027921e14d86380ea2646e3a1b5c55a8b' />
));
