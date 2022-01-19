import { render } from '@testing-library/react';
import React from 'react';
import { TokenInput } from '.';

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

describe('TokenInput', () => {
  it('renders correctly', () => {
    const { container } = render(<Component />);
    expect(container).toBeInTheDocument();
  });
});
