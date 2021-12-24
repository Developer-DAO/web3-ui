import React from 'react';
import { render, screen } from '@testing-library/react';

import { NFT } from './NFT';
import { act } from 'react-dom/test-utils';

describe('NFT', () => {
  it('displays an image NFT properly', async () => {
    act(() => {
      render(
        <NFT
          tokenId="1"
          contractAddress="0x25ed58c027921e14d86380ea2646e3a1b5c55a8b"
        />
      );
    });
    const name = await screen.findByText('Dev #1');
    const image = await screen.findByAltText('Dev #1');
    expect(name).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  //TODO: test for video NFT
});
