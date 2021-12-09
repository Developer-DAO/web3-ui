import React from 'react';
import { render } from '@testing-library/react';

import { ShortAddress } from './ShortAddress';

describe('Short Address', () => {
  it('renders without throwing', () => {
    const { container } = render(<ShortAddress value='taylorswift.eth' />);
    expect(container).toBeInTheDocument();
  });
});
