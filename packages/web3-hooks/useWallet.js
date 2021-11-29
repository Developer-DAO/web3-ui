import { useEffect } from "react";

console.log("useEffect", useEffect);

export const useWallet = () => {
  useEffect(() => {
    console.log("hello world");
  }, []);
};
