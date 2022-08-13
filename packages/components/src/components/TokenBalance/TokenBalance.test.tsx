import { render, screen } from '@testing-library/react';
import { publicProvider } from 'wagmi/providers/public';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';

import { TokenBalance } from './TokenBalance';

describe('TokenBalance', () => {
  // TODO: do we need to somehow mock wagmiClient?

  const { provider } = configureChains(
    [chain.ropsten, chain.polygonMumbai],
    [publicProvider()]
  );

  const client = createClient({
    provider,
  });

  it('should render without throwing', async () => {
    render(
      <WagmiConfig client={client}>
        <TokenBalance />
      </WagmiConfig>
    );

    expect(await screen.findByText('Connect wallet')).toBeInTheDocument();
  });

  it('should render some testnet ETH value', async () => {
    const { container } = render(
      <WagmiConfig client={client}>
        <TokenBalance addressOrName="0x0000000000000000000000000000000000000000" />
      </WagmiConfig>
    );

    expect(container).toBeInTheDocument();
  });

  it('should render some testnet MATIC value', async () => {
    const { container } = render(
      <WagmiConfig client={client}>
        <TokenBalance
          addressOrName="0x0000000000000000000000000000000000000000"
          chainId={chain.polygonMumbai.id}
        />
      </WagmiConfig>
    );

    expect(container).toBeInTheDocument();
  });
});
