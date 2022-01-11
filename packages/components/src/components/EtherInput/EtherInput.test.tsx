import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { EtherInput } from '.';
import { ethers } from 'ethers';

const WrappedEtherInput = (props) => {
  const [value, setValue] = React.useState();

  return (
    <>
      <EtherInput value={value} onChange={(val) => setValue(val)} {...props} />
      <p data-testid="output">{value}</p>
    </>
  );
};

describe('EtherInput component', () => {
  it('should render without throwing', async () => {
    render(<WrappedEtherInput />);
    const input = await screen.findByPlaceholderText('Enter value in ether');
    expect(input).toBeInTheDocument();
  });

  it('should handle ether inputs properly', async () => {
    render(<WrappedEtherInput unit="ether" />);
    const input = await screen.findByPlaceholderText('Enter value in ether');
    const output = screen.getByTestId('output');
    fireEvent.change(input, { target: { value: '1' } });
    expect(output).toHaveTextContent(ethers.utils.parseEther('1').toString());
  });

  it('should handle wei inputs properly', async () => {
    render(<WrappedEtherInput unit="wei" />);
    const input = await screen.findByPlaceholderText('Enter value in wei');
    const output = screen.getByTestId('output');
    fireEvent.change(input, { target: { value: '1' } });
    expect(output).toHaveTextContent('1');
  });
});
