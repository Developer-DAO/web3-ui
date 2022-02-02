---
'@web3-ui/components': minor
---

Added the `TokenInput` component which combines an `input` for the user to provide an amount of tokens and a `select` for the user to select the type of token.

```tsx
const Example = () => {
  const [value, setValue] = React.useState('');
  const [token, setToken] = React.useState('');

  return (
    <TokenInput
      tokens={['BTC', 'ETH', 'GTC']}
      value={value}
      onValueChange={event => setValue(event.target.value)}
      selectedToken={token}
      onTokenChange={event => setToken(event.target.value)}
    />
  );
};
```
