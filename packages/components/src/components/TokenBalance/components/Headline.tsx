import React from 'react';
import { Heading } from '@chakra-ui/react';

export const Headline = (name: string) => (
  <Heading as='h3' size='sm'>
    {name}
  </Heading>
);
