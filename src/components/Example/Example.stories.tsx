import React from 'react';
import { storiesOf } from '@storybook/react';
import { Example } from './Example';

storiesOf('Example', module)
  .add('Default', () => <Example>Button</Example>)
  .add('Active', () => <Example active>Button</Example>)
  .add('Disabled', () => <Example disabled>Button</Example>);
