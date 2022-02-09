---
'@web3-ui/components': minor
---

Added the `TokenInput` component which combines an `input` for the user to provide an amount of tokens and a `select` for the user to select the type of token.

```tsx
const Example = () => {
  const [value, setValue] = React.useState('');
  const [token, setToken] = React.useState('');
  const defaultTokens = [
    {
      symbol: 'USDT',
      address: '0x55d398326f99059fF775485246999027B3197955'
    },
    {
      symbol: 'DAI',
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F'
    }
  ];

  return (
    <TokenInput width="fit-content" p={2}>
      <TokenInput.Input width="30rem" value={value} setValue={setValue} />
      <TokenInput.Select
        fontSize="1.2rem"
        fontWeight="bold"
        w="7rem"
        token={token}
        setToken={setToken}
        tokensList={defaultTokens}
      />
    </TokenInput>
  );
};
```
