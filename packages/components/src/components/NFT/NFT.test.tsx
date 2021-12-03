import React from 'react';
import { render, screen } from '@testing-library/react';

import { NFT } from './NFT';
import { act } from 'react-dom/test-utils';

describe('NFT', () => {
  it('displays the NFT name', () => {
    act(() => {
      render(<NFT tokenId='1' contractAddress='0x25ed58c027921e14d86380ea2646e3a1b5c55a8b' />);
    });
    const name = screen.getByText('Dev #1');
    expect(name).toBeInTheDocument();
  });

  //TODO: test for image src

  //TODO: test for video NFT
});
