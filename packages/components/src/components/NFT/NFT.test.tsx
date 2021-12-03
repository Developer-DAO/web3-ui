import React from 'react';
import { render } from '@testing-library/react';

import { NFT } from './NFT';

describe('NFT', () => {
  it('displays the NFT name', () => {
    const { container } = render(
      <NFT tokenId='1' contractAddress='0x25ed58c027921e14d86380ea2646e3a1b5c55a8b' />
    );

    expect(container.textContent).toContain('Dev #1');
  });
});
