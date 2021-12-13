import React from 'react';
import { jest } from '@jest/globals';
import { render, fireEvent, waitFor } from '@testing-library/react';

import { Address } from './Address';

Object.assign(navigator, {
  clipboard: {
    writeText: () => {},
  },
});

describe('Address', () => {
  it('renders without throwing', () => {
    const { container } = render(<Address value='taylorswift.eth' />);
    expect(container).toBeInTheDocument();
  });
});

describe('Address copiable prop true', () => {
  it('renders without throwing', () => {
    const { container } = render(<Address copiable value='taylorswift.eth' />);
    expect(container).toBeInTheDocument();
  });

  it('renders with icon', () => {
    const { container } = render(<Address copiable value='taylorswift.eth' />);
    const svg = container.querySelector('svg') as SVGElement;

    expect(svg).toBeInTheDocument();
  });

  it('uses writeText from Clipboard API', async () => {
    const { container } = render(<Address copiable value='taylorswift.eth' />);
    const input = container.querySelector('input') as HTMLElement;

    jest.spyOn(navigator.clipboard, 'writeText');

    fireEvent.click(input);

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('taylorswift.eth');
    });
  });
});
