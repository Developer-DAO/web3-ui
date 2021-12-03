import { storiesOf } from '@storybook/react';
import React from 'react';
import { NFTGallery } from '.';

storiesOf('NFTGallery', module).add('Renders a list of nfts owned by an account', () => (
  <NFTGallery address='0x1A16c87927570239FECD343ad2654fD81682725e' />
));

storiesOf('NFTGallery', module).add('Renders an error when OpenSea fails', () => (
  <NFTGallery address='bad_address' />
));
