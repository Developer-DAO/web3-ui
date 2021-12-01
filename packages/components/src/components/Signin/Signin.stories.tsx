import { storiesOf } from '@storybook/react';
import React from 'react';
import { Signin } from '.';

// builds EIP-4361 compliant message.
function buildMessage(
  domain: string,
  address: string,
  uri: string,
  version: number,
  chainId: number,
  nonce: number,
  issuedAt: string,
  statement?: string,
  requestId?: string,
  exp?: Date,
  notBefore?: Date,
  resources?: string[]
) {
  let message = domain + ' wants you to sign in with your Ethereum account: \n' + address + '\n\n';

  if (statement) message += statement + '\n\n';
  message +=
    'URI: ' +
    uri +
    '\nVersion: ' +
    version +
    '\nChain ID: ' +
    chainId +
    '\nNonce: ' +
    nonce +
    '\nIssued At: ' +
    issuedAt;
  if (exp) message += '\nExpiration Time: ' + exp;
  if (notBefore) message += '\nNot Before' + notBefore;
  if (requestId) message += '\nRequest Id: ' + requestId;
  if (resources) message += '\nResources:' + resources.forEach((x) => (message += '\n- ' + x));

  return message;
}

storiesOf('Sign-in', module).add('Default', () => <Signin data='Test' />);

let now = new Date();
const message = buildMessage(
  'example.xyz',
  '0x000000000000000',
  'https://sign-in',
  1,
  1,
  1234,
  now.toISOString(),
  'This is a test sign-in',
  '1'
);

storiesOf('Sign-in', module).add('Standard Message', () => <Signin data={message} />);
