import { render } from '@testing-library/react';

import { Avatar } from './';

describe('Avatar', () => {
  it('renders without throwing', () => {
    const { container } = render(<Avatar />);
    expect(container).toBeInTheDocument();
  });
});
