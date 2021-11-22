---
to: src/components/<%= h.changeCase.pascalCase(name) %>/__tests__/<%= h.changeCase.pascalCase(name) %>.test.tsx
---
import React from 'react';
import { <%= h.changeCase.pascalCase(name) %>, <%= h.changeCase.pascalCase(name) %>Props } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: <%= h.changeCase.pascalCase(name) %>Props = {
  
};

const setup = (props = defaultProps) => render(<<%= h.changeCase.pascalCase(name) %> {...props} />);

describe('<%= h.changeCase.pascalCase(name) %>', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
