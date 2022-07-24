import React from 'react';
import { render } from '@testing-library/react';

import { Badge } from './';

describe('Badge', () => {
  it('renders without throwing', () => {
    const { container } = render(<Badge />);
    expect(container).toBeInTheDocument();
  });
});
