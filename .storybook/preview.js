import { chain, createClient, configureChains, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const alchemyId = process.env.ALCHEMY_ID;

const { provider, webSocketProvider } = configureChains(
  [chain.mainnet, chain.polygon, chain.polygonMumbai],
  [alchemyProvider({ alchemyId }), publicProvider()]
);

const wagmiClient = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

export const decorators = [
  (Story) => (
    <WagmiConfig client={wagmiClient}>
      <Story />
    </WagmiConfig>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // controls: { expanded: true },
  // viewMode: 'docs',
};
