export const constructExplorerUrl = (address: string, isMainnet = true) => `https://${isMainnet ? 'explorer.celo.org' : 'alfajores-blockscout.celo-testnet.org'}/address/${address}`;
