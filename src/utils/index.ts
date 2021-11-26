/**
 * @dev Helper function to truncate an ethereum address to the Oxaba...bab format.
 * @param address - the address you want to truncate. must be a valid ethereum address.
 * @returns the truncated address.
 */
export function getTruncatedAddress(address: string) {
  if (!address) return null;
  return address.slice(0, 5) + '...' + address.slice(-4);
}
