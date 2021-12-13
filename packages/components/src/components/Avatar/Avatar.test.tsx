import React from 'react';
import { render } from '@testing-library/react';

import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders without throwing', () => {
    const { container } = render(<Avatar address='0x983110309620D911731Ac0932219af06091b6744' />);
    expect(container).toBeInTheDocument();
  });
});
