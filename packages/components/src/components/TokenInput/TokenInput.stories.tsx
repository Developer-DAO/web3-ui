import React from 'react';
import { TokenInput } from '.';

export default {
  title: 'Components/TokenInput',
  component: TokenInput,
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

const Component2 = (props) => {
  const [value, setValue] = React.useState('');
  const [token, setToken] = React.useState('');

  return (
    <TokenInput
      {...props}
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
          borderLeft: '2px solid black',
        },
      }}
    />
  );
};

const Component3 = () => {
  const [value, setValue] = React.useState('');
  const [token, setToken] = React.useState('');

  return (
    <TokenInput
      width="fit-content"
      border="2 px solid black"
      borderWidth="2px"
      p={2}
      selectedToken={token}
      onTokenChange={setToken}
      value={value}
      onValueChange={setValue}
      inputProps={{
        width: '20rem',
      }}
      selectProps={{
        borderLeft: '2px solid black',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        w: '7rem',
        outline: 'none',
        rounded: 'none',
        _focus: {
          borderLeft: '2px solid black',
        },
      }}
    />
  );
};

export const Default = () => <Component />;

export const WithSelectProps = () => <Component2 />;

export const withCustomWidthAndBorder = () => <Component3 />;
