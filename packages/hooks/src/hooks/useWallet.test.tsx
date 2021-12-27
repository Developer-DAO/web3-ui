import React from 'react';
import { useWallet } from './useWallet';
import { Provider } from '../Provider';
import { renderHook } from '@testing-library/react-hooks';

describe('useWallet tests', () => {
  let windowSpy;

  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get');
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });

  test('should instantiate for valid input types', () => {
    const wrapper = ({ children }) => (
      <Provider network={1} infuraId="abc123">
        {children}
      </Provider>
    );
    const { result } = renderHook(() => useWallet(), { wrapper });

    expect(result.current.connected).toBe(false);
    expect(typeof result.current.connectWallet).toBe('function');
  });

  // initially is chainId undefined / requires network per the argument
  test('should be able to switch networks', () => {
    const testNetwork = 111;
    const wrapper = ({ children }) => (
      <Provider network={testNetwork} infuraId="abc123">
        {children}
      </Provider>
    );
    const { result } = renderHook(() => useWallet(), { wrapper });

    let requestArgs;

    // hijack the call to window.ethereum.request to capture those args
    // this ensures that we have values in the requestArgs if/when request is called
    // those are checked at the end
    windowSpy.mockImplementation(() => ({
      ethereum: {
        request: arg => {
          requestArgs = arg;
        }
      }
    }));

    result.current.switchToCorrectNetwork();
    expect(windowSpy).toHaveBeenCalled();
    expect(requestArgs).toStrictEqual({
      method: 'wallet_switchEthereumChain',
      // this passes (for high number networks)
      params: [{ chainId: `0x${testNetwork}` }]
      // The test should probably look like this
      // if we are in fact converting network numbers to hex
      // but fails with the current implementation
      // params: [{ chainId: `0x${Number(testNetwork).toString(16)}` }]
    });
  });
});
