import React from 'react';
import { render } from '@testing-library/react';

import { Address } from './Address';

describe('Address', () => {
  it('renders without throwing', () => {
    const { container } = render(<Address value='taylorswift.eth' shortened={false} />);
    expect(container).toBeInTheDocument();
  });
});

describe('Shortened Address', () => {
  it('check the length of the address', () => {
    const { container } = render(<Address value='0x00000000000000' shortened />);
    const addressInput = container.querySelector('input') as HTMLInputElement;
    expect(addressInput).toHaveValue('0x00...0000');
  });
});
