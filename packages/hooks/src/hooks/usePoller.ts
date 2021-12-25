import { useEffect, useRef } from "react";

const usePoller = (func: () => void, delay: number): void => {
  const savedCbFunc = useRef<() => void>();

  // Remember the latest fn.
  useEffect((): void => {
    savedCbFunc.current = func;
  }, [func]);

  useEffect((): void | (() => void) => {
    function tick() {
      if (savedCbFunc.current) savedCbFunc.current();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);

  useEffect(() => {
    func();
  }, []);
};

export default usePoller;