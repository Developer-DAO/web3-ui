import React from 'react';
import { render } from '@testing-library/react';

import { Address } from './Address';

describe('Address', () => {
  it('renders without throwing', () => {
    const { container } = render(<Address value='taylorswift.eth' shortened={false} />);
    expect(container).toBeInTheDocument();
  });
  
  it('checks the length of the address when shortened', () => {
    const { container } = render(<Address value='0x00000000000000' shortened />);
    const addressInput = container.querySelector('input') as HTMLInputElement;
    expect(addressInput).toHaveValue('0x00...0000');
  });
});
