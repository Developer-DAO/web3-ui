import React from 'react';
import { render } from '@testing-library/react';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders without throwing', () => {
    const { container } = render(<Checkbox />);
    expect(container).toBeInTheDocument();
  });
});
