---
to: src/components/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.stories.tsx
---
import { storiesOf } from '@storybook/react';
import React from 'react';
import { <%= h.changeCase.pascalCase(name) %> } from '.';

storiesOf('<%= h.changeCase.pascalCase(name) %>', module).add('Default', () => <<%= h.changeCase.pascalCase(name) %> />);
