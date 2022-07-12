/* eslint-disable no-param-reassign */

import { IConnectWallet } from 'types';
import { chains } from './chains';
import { contracts } from './contracts';

export const connectWallet = (newChainName: string): IConnectWallet => {
  const chain = chains[newChainName];
  return {
    network: {
      chainName: chain.name,
      chainID: chain.chainId,
    },
    provider: chain.provider,
    settings: { providerType: true },
  };
};

export const contractsProxy = new Proxy(contracts, {
  set(target, value) {
    target.type = value ? 'mainnet' : 'testnet';
    return true;
  },
});

export const chainsProxy = new Proxy(chains, {
  set(target, value) {
    target['Trust'].chainId = value ? 1 : 0;
    target['Celo-Chain'].chainId = value ? 42220 : 44787;
    target['Celo-Chain'].provider.WalletConnect.provider.rpc.rpc = value ? 'https://forno.celo.org/'
      : 'https://alfajores-forno.celo-testnet.org/';
    return true;
  },
});

export const getCeloConfigMetamask = (isMainnet: boolean) => [{
  chainId: isMainnet ? '0xA4EC' : '0xAEF3',
  chainName: isMainnet ? 'Celo Mainnet' : 'Alfajores Testnet',
  nativeCurrency: {
    name: 'Celo',
    symbol: 'Celo',
    decimals: 18,
  },
  rpcUrls: isMainnet ? ['https://forno.celo.org'] : ['https://alfajores-forno.celo-testnet.org'],
  blockExplorerUrls: isMainnet ? ['https://explorer.celo.org'] : ['https://alfajores-blockscout.celo-testnet.org'],
}];
