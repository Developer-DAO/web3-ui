import { useEffect, useRef } from "react";

const usePoller = (func: () => void, delay: number): void => {
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
  }, [delay]);

  useEffect(() => {
    func();
  }, []);
};

export default usePoller;