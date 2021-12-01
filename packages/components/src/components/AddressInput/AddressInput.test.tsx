import React from 'react';
import { render } from '@testing-library/react';
import { AddressInput } from '.';
import { MockProvider } from 'ethereum-waffle';

describe('AddressInput', () => {
  it('renders', () => {
    const provider = new MockProvider();
    const [value, setValue] = React.useState('');

    const { container } = render(
      <AddressInput value={value} setValue={setValue} provider={provider} />
    );
    expect(container);
  });
});
