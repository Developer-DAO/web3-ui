import React from 'react';
import { useWallet } from './useWallet';
import { Provider } from '../Provider';
import { renderHook } from '@testing-library/react-hooks';

let windowSpy;

beforeEach(() => {
  windowSpy = jest.spyOn(window, 'window', 'get');
});

afterEach(() => {
  windowSpy.mockRestore();
});

describe('useWallet tests', () => {
  test('should use the wallet', () => {
    const wrapper = ({ children }) => (
      <Provider network={1} infuraId={'abc123'}>
        {children}
      </Provider>
    );
    const { result } = renderHook(() => useWallet(), { wrapper });

    expect(result.current.connected).toBe(false);
    expect(typeof result.current.connectWallet).toBe('function');
  });

  // initially is chainId undefined / requires network per the argument
  test('should be able to switch networks', () => {
    const testNetwork = 2;
    const wrapper = ({ children }) => (
      <Provider network={testNetwork} infuraId={'abc123'}>
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
      params: [{ chainId: `0x${testNetwork}` }]
    });
  });
});
