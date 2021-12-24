import React from 'react';
import { jest } from '@jest/globals';
import {
  render,
  fireEvent,
  waitFor,
  getByTestId
} from '@testing-library/react';

import { Address } from './Address';

/**
 * We need to mock the Clipboard API by creating a global navigator object.
 *
 * We're assigning an empty function to `writeText`
 * as we're only testing if it has been called with specific argument.
 */
Object.assign(navigator, {
  clipboard: {
    writeText: () => {}
  }
});

describe('Address', () => {
  it('renders without throwing', () => {
    const { container } = render(<Address value="taylorswift.eth" />);
    expect(container).toBeInTheDocument();
  });
});

describe('Address copiable prop true', () => {
  it('renders without throwing', () => {
    const { container } = render(<Address copiable value="taylorswift.eth" />);
    expect(container).toBeInTheDocument();
  });

  it('renders with icon', () => {
    const { container } = render(<Address copiable value="taylorswift.eth" />);
    const svg = container.querySelector('svg') as SVGElement;

    expect(svg).toBeInTheDocument();
  });

  it('uses writeText from Clipboard API', async () => {
    const { container } = render(<Address copiable value="taylorswift.eth" />);
    const addressContainer = getByTestId(container, 'address-container');

    jest.spyOn(navigator.clipboard, 'writeText');

    fireEvent.click(addressContainer);

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
        'taylorswift.eth'
      );
    });
  });

  it('checks the length of the address when shortened', () => {
    const { container } = render(
      <Address value="0x00000000000000" shortened />
    );
    expect(container.textContent).toContain('0x00...0000');
  });
});
