import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from './Provider';

describe('Provider', () => {
  it('renders without throwing', () => {
    const { container } = render(<Provider network='rinkeby' />);
    expect(container).toBeInTheDocument();
  });
});
