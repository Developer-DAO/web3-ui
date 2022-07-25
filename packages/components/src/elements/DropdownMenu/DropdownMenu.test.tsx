import React from 'react';
import { render } from '@testing-library/react';

import { DropdownMenu } from './DropdownMenu';

describe('DropdownMenu', () => {
  it('renders without throwing', () => {
    const { container } = render(<DropdownMenu />);
    expect(container).toBeInTheDocument();
  });
});
