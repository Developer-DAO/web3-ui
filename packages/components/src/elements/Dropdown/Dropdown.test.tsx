import { render } from '@testing-library/react';

import { Dropdown } from './Dropdown';

describe('DropdownMenu', () => {
  it('renders without throwing', () => {
    const { container } = render(<Dropdown />);
    expect(container).toBeInTheDocument();
  });
});
