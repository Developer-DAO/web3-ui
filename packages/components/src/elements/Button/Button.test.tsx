import React from 'react';
import { render } from '@testing-library/react';

import { Button } from './';

describe('Address', () => {
  it('renders without throwing', () => {
    const { container } = render(<Button />);
    expect(container).toBeInTheDocument();
  });
});
