import { render } from '@testing-library/react';

import { Sheet } from './Sheet';

describe('Sheet', () => {
  it('renders without throwing', () => {
    const { container } = render(<Sheet />);
    expect(container).toBeInTheDocument();
  });
});
