import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useWallet } from './useWallet';
import { Provider } from '../Provider';

test('', () => {
  const wrapper = ({ children }) => (
    <Provider network='' infuraId=''>
      {children}
    </Provider>
  );
  const { result } = renderHook(() => useWallet(), { wrapper });

  act(() => {});

  expect(1).toBe(1);
});
