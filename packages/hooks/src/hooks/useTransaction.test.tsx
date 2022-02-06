import { renderHook, act } from '@testing-library/react-hooks';
import { useTransaction } from './useTransaction';

describe('useTransaction', () => {
  let getMockMethod: (withError?: boolean) => jest.Mock<any, any>;
  const tx = {
    chainId: 0,
    confirmations: 0,
    from: '0xd9f96E9bDb294Fc0819e88fc51FE3C7907173493',
    hash: '0xd268efc2a51973df6012357e05739e8e44258a4ee6e32fe9d8810cbc5c32b8ac',
  };
  const txReceipt = { ...tx, confirmations: 2 };
  const txResponse = {
    ...tx,
    wait: () => new Promise((res) => setTimeout(() => res(txReceipt))),
  };
  const txError = {
    code: 4001,
    message: 'MetaMask Tx Signature: User denied transaction signature.',
  };

  beforeEach(() => {
    getMockMethod = (withError = false) =>
      jest.fn(() => {
        // Do async work to simulate a transaction
        return new Promise((res, rej) => {
          setTimeout(() => {
            withError ? rej(txError) : res(txResponse);
          });
        });
      });
  });

  test('has correct API', () => {
    const mockMethod = getMockMethod();
    const { result } = renderHook(() => useTransaction(mockMethod));
    const [execute, loading, error] = result.current;

    expect(typeof execute).toBe('function');
    expect(typeof loading).toBe('boolean');
    expect(typeof error).not.toBe('undefined');
  });

  test('execute() calls given method with correct args', async () => {
    const mockMethod = getMockMethod();
    const { result } = renderHook(() => useTransaction(mockMethod));
    const execute = result.current[0];
    const args = ['Hello World', 1, true];

    await act(async () => {
      await execute(args);
    });

    expect(mockMethod.mock.calls[0]).toEqual([args]);
  });

  test('execute() sets loading back to false after transaction has finished', async () => {
    const mockMethod = getMockMethod();
    const { result } = renderHook(() => useTransaction(mockMethod));

    expect(result.current[1]).toBe(false);
    await act(async () => {
      // await the method call and confirmation
      await result.current[0]([]);
      expect(result.current[1]).toBe(false);
    });
  });

  test('execute() returns the transaction response if successful', async () => {
    const mockMethod = getMockMethod();
    const { result } = renderHook(() => useTransaction(mockMethod));

    await act(async () => {
      const returnVal = await result.current[0]([]);
      expect(returnVal).toBe(txResponse);
    });
  });

  test('execute() sets error if unsuccessful', async () => {
    const mockMethod = getMockMethod(true); // withError = true
    const { result } = renderHook(() => useTransaction(mockMethod));

    expect(result.current[2]).toBe(null);
    await act(async () => {
      await result.current[0]([]);
      expect(result.current[2]).toBe(txError);
    });
  });

  test('execute() returns error if unsuccessful', async () => {
    const mockMethod = getMockMethod(true); // withError = true
    const { result } = renderHook(() => useTransaction(mockMethod));

    expect(result.current[2]).toBe(null);
    await act(async () => {
      const response = await result.current[0]([]);
      expect(response).toBe(txError);
    });
  });

  test('execute() sets loading to true', async () => {
    const mockMethod = getMockMethod();
    const { result, waitFor } = renderHook(() => useTransaction(mockMethod));

    expect(result.current[1]).toBe(false);
    await act(async () => {
      await waitFor(() => {
        result.current[0]([]);

        // while waiting for the transaction to be confirmed...
        expect(result.current[1]).toBe(true);
      });
    });
  });
});
