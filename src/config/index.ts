/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IConnectWallet, IContracts } from 'types';

import store from 'store/configureStore';

export * from './constants';

export const chains: {
  [key: string]: {
    name: string;
    chainId: number;
    provider: {
      [key: string]: any;
    };
    img?: any;
  };
} = {
  Trust: {
    name: 'Trust Wallet',
    chainId: 1,
    provider: {
      WalletConnect: {
        name: 'WalletConnect',
        useProvider: 'bridge',
        provider: {
          bridge: {
            bridge: 'https://bridge.walletconnect.org',
          },
        },
      },
    },
  },
  'Celo-Chain': {
    name: 'Celo',
    chainId: 42220,
    provider: {
      MetaMask: { name: 'MetaMask' },
      WalletConnect: {
        name: 'WalletConnect',
        useProvider: 'rpc',
        provider: {
          rpc: {
            rpc: {
              42220: 'https://forno.celo.org/',
            },
            chainId: 42220,
          },
        },
      },
    },
  },
};

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

// eslint-disable-next-line no-shadow
export enum TokenNames {
}

// eslint-disable-next-line no-shadow
export enum ContractsNames {
}

export type IContractsNames = keyof typeof ContractsNames;

export const contracts: IContracts = {
  type: 'mainnet',
  names: Object.keys(ContractsNames),
  decimals: 18,
  params: {
  },
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

function getProduction() {
  contractsProxy.type = store.store.getState().user.isMainnet ? 'mainnet' : 'testnet';
  chainsProxy['Trust'].chainId = store.store.getState().user.isMainnet ? 1 : 0;
  chainsProxy['Celo-Chain'].chainId = store.store.getState().user.isMainnet ? 42220 : 44787;
  chainsProxy['Celo-Chain'].provider.WalletConnect.provider.rpc.rpc = store.store.getState().user.isMainnet
    ? { 42220: 'https://forno.celo.org/' }
    : { 44787: 'https://alfajores-forno.celo-testnet.org/' };
  return store.store.getState().user.isMainnet;
}

store.store.subscribe(getProduction);
