import React from 'react';

/**
 * @dev Hook to get the loading status, error, and data of a function call.
 * @param method The contract function you want to call
 * @param args an array of arguments to pass to the function.
 * @returns {
 *  execute: () => Promise<any>,
 *  loading: boolean,
 *  error: null | Error,
 * } {
 *  execute: Executes the transaction.
 *  loading: True until the the transaction is confirmed, false otherwise.
 *  error: Contains the error object if the transaction failed, null otherwise.
 * }
 */

export function useTransaction(method, args: any[] = []) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<any>(null);

  const execute = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await method(...args);
      // wait for the transaction to be confirmed
      await response.wait();
      setError(null);
      setLoading(false);
      return response;
    } catch (error) {
      setError(error);
      setLoading(false);
      return error;
    }
  };

  return [execute, loading, error];
}
