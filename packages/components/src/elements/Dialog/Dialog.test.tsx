import { render } from '@testing-library/react';

import { Dialog } from './Dialog';

describe('Dialog', () => {
  it('renders without throwing', () => {
    const { container } = render(<Dialog />);
    expect(container).toBeInTheDocument();
  });
});
