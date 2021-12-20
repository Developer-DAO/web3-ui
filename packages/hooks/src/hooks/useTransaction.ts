import React from 'react';

export function useTransaction(method, params: any[] = []) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<any>(null);

  const execute = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await method(...params);
      setError(null);
      setLoading(false);
      return response;
    } catch (error) {
      setError(error);
      setLoading(false);
      return error;
    }
  };

  return { execute, loading, error };
}
