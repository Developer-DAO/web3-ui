import React from 'react';
import { render, waitFor } from '@testing-library/react';

import { NFTGallery } from './NFTGallery';

describe('NFTGallery', () => {
  it('displays the grid of NFTs', async () => {
    const { container } = render(
      <NFTGallery address="0x1A16c87927570239FECD343ad2654fD81682725e" />
    );
    await waitFor(() => {
      expect(container).toHaveTextContent('MutantApeYachtClub #29501');
      expect(container).toHaveTextContent('Dev #1');
    });
  });

  it('renders an error', async () => {
    const { container } = render(<NFTGallery address="bad_address" />);
    await waitFor(() => {
      expect(container).toHaveTextContent('OpenSea request failed');
    });
  });

  //TODO: test for ENS
});
