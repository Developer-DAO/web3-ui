import { useEffect, useRef } from 'react';

export const usePoller = (func: () => void, delay: number): void => {
  /**
   * Calls a function at a set interval. The function will also be called
   * immediately.
   *
   * @param func The function to call at an interval
   * @param delay The delay between each interval call
   * @example
   * const callback = () => console.log('test')
   * usePoller(callback, 1000) // logs 'test' every second
   */

  const savedCbFunc = useRef(func);

  // Remember the latest fn.
  useEffect(() => {
    savedCbFunc.current = func;
  }, [func]);

  useEffect(() => {
    if (!delay) {
      return;
    }

    const id = setInterval(savedCbFunc.current, delay);
    return () => clearInterval(id);
  }, [delay, func]);

  useEffect(() => {
    func();
  }, []);
};
