import React from 'react';
import { render } from '@testing-library/react';

import { NFT } from './NFT';

describe('NFT', () => {
  it('displays the NFT name', () => {
    const { container } = render(
      <NFT
        tokenId='1'
        name='Dev #1'
        imageUrl='https://storage.opensea.io/files/acef01b1f111088c40a0d86a4cd8a2bd.svg'
        assetContractName='Devs for Revolution'
        assetContractSymbol='DEVS'
      />
    );

    expect(container.textContent).toContain('Dev #1');
  });
});
