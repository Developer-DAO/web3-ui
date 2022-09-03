import { render } from '@testing-library/react';

import { Dropdown } from './Dropdown';

describe('DropdownMenu', () => {
  it('renders without throwing', () => {
    const { container } = render(
      <Dropdown
        label="Test label"
        items={['Item 1', 'Item 2', 'Item 3']}
        placeHolder="Test placeHolder"
        onSelect={(value) => {
          alert('value changed, new value is: ' + value);
        }}
      />
    );
    expect(container).toBeInTheDocument();
  });
});
