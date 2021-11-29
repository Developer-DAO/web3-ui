import React from 'react';
import { render } from '@testing-library/react';

import { Address } from './Address';

describe('Address', () => {
  it('renders without throwing', () => {
    const { container } = render(<Address />);
    expect(container).toBeInTheDocument();
  });
});
