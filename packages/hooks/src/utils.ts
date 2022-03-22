export const convertToHexStr = (num: number) => num.toString(16);

export const switchNetwork = async (networkId: number) => {
  const networkHex = `0x${convertToHexStr(networkId)}`;
  if (window.ethereum) {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: networkHex }],
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    alert(
      'Switching networks automatically is only supported in MetaMask. Please consider installing it: https://metamask.io/download.html'
    );
  }
};
