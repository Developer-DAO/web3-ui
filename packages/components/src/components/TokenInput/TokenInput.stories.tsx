import React from 'react';
import TokenInput from './TokenInput';
import { defaultTokens } from './tokens';

const Component = () => {
  const [value, setValue] = React.useState('');
  const [token, setToken] = React.useState('');

  return (
    <TokenInput>
      <TokenInput.Input value={value} setValue={setValue} />
      <TokenInput.Select
        token={token}
        setToken={setToken}
        tokensList={defaultTokens}
      />
    </TokenInput>
  );
};

const Component2 = props => {
  const [value, setValue] = React.useState('');
  const [token, setToken] = React.useState('');

  return (
    <TokenInput>
      <TokenInput.Input value={value} setValue={setValue} />
      <TokenInput.Select
        borderLeft="2px solid black"
        fontSize="1.2rem"
        fontWeight="bold"
        border="none"
        outline="none"
        rounded="none"
        _focus={{
          borderLeft: '2px solid black'
        }}
        token={token}
        setToken={setToken}
        tokensList={defaultTokens}
      />
    </TokenInput>
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
    >
      <TokenInput.Input width="30rem" value={value} setValue={setValue} />
      <TokenInput.Select
        borderLeft="2px solid black"
        fontSize="1.2rem"
        fontWeight="bold"
        w="7rem"
        outline="none"
        rounded="none"
        _focus={{
          borderLeft: '2px solid black'
        }}
        token={token}
        setToken={setToken}
        tokensList={defaultTokens}
      />
    </TokenInput>
  );
};

export const Default = () => <Component />;

export const WithSelectProps = () => <Component2 />;

export const withCustomWidthAndBorder = () => <Component3 />;

export default {
  title: 'Components/TokenInputComp',
  component: Default
};
