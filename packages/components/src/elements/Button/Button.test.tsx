import { render } from '@testing-library/react';

import { Button } from './';

describe('Button', () => {
  it('renders without throwing', () => {
    const { container } = render(<Button />);
    expect(container).toBeInTheDocument();
  });
});
