import { render } from '@testing-library/react';
import { publicProvider } from 'wagmi/providers/public';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';

import { ENSAvatar } from './ENSAvatar';

describe('ENSAvatar', () => {
  const { provider } = configureChains([chain.mainnet], [publicProvider()]);

  const client = createClient({
    provider,
  });

  it('should render without throwing', async () => {
    const { container } = render(
      <WagmiConfig client={client}>
        <ENSAvatar address="0xF9D26888427ab76e4Dc5b9ACB23793bdd30D8000" />
      </WagmiConfig>
    );

    expect(container).toBeInTheDocument();
  });
});
