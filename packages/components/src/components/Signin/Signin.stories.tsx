import { storiesOf } from '@storybook/react';
import React from 'react';
import { Signin } from '.';
import { useWallet, Provider } from '@web3-ui/hooks';

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
    'URI:' +
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

storiesOf('Sign-in', module).add('Default', () => (
  <Signin
    onClick={() => {
      return null;
    }}
  />
));

const SignInWithWallet = () => {
  const { connected, connectWallet, connection } = useWallet();

  async function handleSignIn() {
    if (!connected) connectWallet();
    let signer = connection.signer;
    signer.signMessage('Test');
  }
  return (
    <>
      <Signin onClick={handleSignIn} />
    </>
  );
};

storiesOf('Sign-in', module).add('With Waller', () => (
  <Provider network='rinkeby'>
    <SignInWithWallet />
  </Provider>
));
