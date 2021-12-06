import React from 'react';
import { NFTGallery } from '.';

export default {
  title: 'Components/NFTGallery',
  component: NFTGallery,
};

export const Default = () => <NFTGallery address='0x1A16c87927570239FECD343ad2654fD81682725e' />;

export const WithAnError = () => <NFTGallery address='bad_address' />;
