import React from 'react';

/**
 * @dev Hook to get the loading status, error, and data of a function call.
 * @param method Function to call
 * @param args an array of arguments to pass to the function
 * @returns {
 *  execute: () => Promise<any>,
 *  loading: boolean,
 *  error: null | Error,
 * } {
 *  execute: On calling this method, the function is executed with the passed arguments and the loading status is set to true.
 *  loading: this is true while the function is executing and will be false when the function has finished executing.,
 *  error: this will be null when there is no error and in case of error, it will contain the error object.
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
