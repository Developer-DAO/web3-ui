import React from 'react';
import { TokenInput } from '.';

export default {
  title: 'Components/TokenInput',
  component: TokenInput
};

const Component = () => {
  const [value, setValue] = React.useState('');
  const [token, setToken] = React.useState('');

  return (
    <TokenInput
      selectedToken={token}
      onTokenChange={setToken}
      value={value}
      onValueChange={setValue}
    />
  );
};

export const Default = () => <Component />;

const Component2 = () => {
  const [value, setValue] = React.useState('');
  const [token, setToken] = React.useState('');

  return (
    <TokenInput
      selectedToken={token}
      onTokenChange={setToken}
      value={value}
      onValueChange={setValue}
      selectProps={{
        borderLeft: '2px solid black',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        border: 'none',
        outline: 'none',
        rounded: 'none',
        _focus: {
          borderLeft: '2px solid black'
        }
      }}
    />
  );
};

export const WithSelectProps = () => <Component2 />;
