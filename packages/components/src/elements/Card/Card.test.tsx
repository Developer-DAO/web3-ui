import { render } from '@testing-library/react';

import { Card } from './';

describe('Card', () => {
  it('renders without throwing', () => {
    const { container } = render(<Card />);
    expect(container).toBeInTheDocument();
  });
});
