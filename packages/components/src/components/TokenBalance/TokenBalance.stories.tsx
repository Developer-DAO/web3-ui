import { storiesOf } from '@storybook/react';
import React from 'react';
import { TokenBalance } from './TokenBalance';

storiesOf('TokenBalance', module).add('Renders the balance of a certain token', () => (
  <TokenBalance />
));
