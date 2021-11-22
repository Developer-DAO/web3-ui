import React from 'react';
import { Example } from '..';
import { render } from '@testing-library/react';

describe('Example Component', () => {
  it('Example renders', () => {
    const { container } = render(<Example />);

    const node = container.querySelector('button.Example');
    expect(node!.className).toEqual('Example');
  });

  it('Example active renders', () => {
    const { container } = render(<Example active />);

    const node = container.querySelector('button.Example');
    expect(node!.className).toEqual('Example Example--active');
  });

  it('Example disabled renders', () => {
    const { container } = render(<Example disabled />);

    const node = container.querySelector('button.Example');
    expect(node!.className).toEqual('Example Example--disabled');
  });

  it('Example children renders', () => {
    const { container } = render(<Example>foo</Example>);

    const node = container.querySelector('button.Example');
    expect(node!.innerHTML).toEqual('foo');
  });

  it('Example extra classNames render', () => {
    const { container } = render(<Example className='foo' />);

    const node = container.querySelector('button.Example');
    expect(node!.className).toEqual('Example foo');
  });
});
