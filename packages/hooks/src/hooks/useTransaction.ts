import React from 'react';
import { Web3Context } from '../Provider';
import {TransactionRequest} from '@ethersproject/abstract-provider'
/**
 * @dev Hook to get the loading status, error, and data of a Transaction.
 * @param transactionRequest The transactionRequest Object
 * @returns {
 *  execute: (TransactionRequest) => Promise<any>,
 *  loading: boolean,
 *  error: null | Error,
 * } {
 *  execute: Executes the transaction.
 *  loading: True until the the transaction is confirmed, false otherwise.
 *  error: Contains the error object if the transaction failed, null otherwise.
 * }
 */

export function useTransaction() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<any>(null);
  const context = React.useContext(Web3Context);

  const execute = async (transactionRequest:TransactionRequest) => {
    setLoading(true);
    setError(null);
    try {
      //const response = await method(...args);
      if (context) {
          const tx = await context.signer!.sendTransaction(transactionRequest);
          const receipt = await tx.wait();
          setError(null);
          setLoading(false);
          return receipt;
      }     
    } catch (error) {
      setError(error);
      setLoading(false);
      return error;
    }
  };

  return [execute, loading, error];
}
