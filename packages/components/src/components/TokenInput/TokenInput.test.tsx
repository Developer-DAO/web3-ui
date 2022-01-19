import { render } from '@testing-library/react';
import React from 'react';
import { TokenInput } from '.';

describe('TokenInput', () => {
  it('renders without throwing', () => {
    const [value, setValue] = React.useState('');
    const [token, setToken] = React.useState('');
    const { container } = render(
      <TokenInput
        selectedToken={token}
        onTokenChange={setToken}
        value={value}
        onValueChange={setValue}
        showDefualtTokens={true}
      />
    );
    expect(container).toBeInTheDocument();
  });
});
