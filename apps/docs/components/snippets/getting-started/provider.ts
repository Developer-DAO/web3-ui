// eslint-disable-next-line import/no-anonymous-default-export
export default {
  jsx: `  return (
        <WagmiConfig client={wagmiClient}>
            <Web3uiProvider>
                <Component {...pageProps} />
            </Web3uiProvider>
        </WagmiConfig>
    );`,
};
