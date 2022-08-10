import { render } from '@testing-library/react';

import { TextField } from './TextField';

describe('TextField', () => {
  it('renders without throwing', () => {
    const { container } = render(<TextField />);
    expect(container).toBeInTheDocument();
  });
});
