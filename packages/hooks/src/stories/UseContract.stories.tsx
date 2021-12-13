import { storiesOf } from '@storybook/react';
import React from 'react';
import { Provider, useWallet, useContract } from '..';
import { Button, Input, Grid, GridItem } from '@chakra-ui/react';
import { ethers } from 'ethers';

const ADDRESS = '0x7e1D33FcF1C6b6fd301e0B7305dD40E543CF7135'; // Rinkeby
const ABI = [
  {
    inputs: [
      {
        internalType: 'string',
        name: '_greeting',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'greet',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_greeting',
        type: 'string',
      },
    ],
    name: 'setGreeting',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_to',
        type: 'address',
      },
    ],
    name: 'transferTo',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
];

const Default = () => {
  const { connectWallet, disconnectWallet, connected } = useWallet();
  const contract = useContract(ADDRESS, ABI);
  const [state, setState] = React.useState({
    newGreeting: '',
    toAddress: '',
    amount: '0',
  });

  const handleGreet = async () => alert(await contract.greet());
  const handleChangeState =
    (stateName: string) =>
    ({ target: { value } }) => {
      setState({ ...state, [stateName]: value });
    };
  const handleSetGreeting = async () => {
    await contract.setGreeting(state.newGreeting);
    setState({ ...state, newGreeting: '' });
  };
  const handleTransferTo = async () => {
    await contract.transferTo(state.toAddress, { value: ethers.utils.parseEther(state.amount) });
    setState({ ...state, toAddress: '', amount: '0' });
  };

  if (connected) {
    return (
      <div>
        <Button onClick={disconnectWallet}>Disconnect wallet</Button>
        <h3>Contract Methods</h3>
        <Grid templateColumns='repeat(5, 1fr)' columnGap={5}>
          <GridItem colSpan={5}>
            <Button onClick={handleGreet}>greet</Button>
          </GridItem>
          <GridItem colSpan={5}>
            <Button disabled={!state.newGreeting} onClick={handleSetGreeting}>
              setGreeting
            </Button>
            <Input
              value={state.newGreeting}
              placeholder='New Greeting!'
              onChange={handleChangeState('newGreeting')}
            />
          </GridItem>
          <GridItem colSpan={5}>
            <Button disabled={!(state.toAddress && state.amount)} onClick={handleTransferTo}>
              transferTo
            </Button>
            <Input
              value={state.toAddress}
              placeholder='0xjA123....'
              onChange={handleChangeState('toAddress')}
            />
            <Input placeholder='0.2' value={state.amount} onChange={handleChangeState('amount')} />
          </GridItem>
        </Grid>
      </div>
    );
  }

  return (
    <>
      <Button onClick={connectWallet}>Connect Wallet</Button>
    </>
  );
};

storiesOf('Hooks/useContract', module).add('Default', () => (
  <Provider network='rinkeby'>
    <Default />
  </Provider>
));
