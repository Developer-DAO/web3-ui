import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from './Provider';
import { NETWORKS } from '.';

describe('Provider', () => {
  it('renders without throwing', () => {
    const { container } = render(<Provider network={NETWORKS.rinkeby} />);
    expect(container).toBeInTheDocument();
  });
});
