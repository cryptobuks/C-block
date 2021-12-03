/* eslint-disable @typescript-eslint/no-explicit-any */
import { IConnectWallet, IContracts } from 'types';

import { isProduction } from './constants';

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
    chainId: isProduction ? 1 : 0,
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
  'Binance-Smart-Chain': {
    name: 'Binance-Smart-Chain',
    chainId: isProduction ? 56 : 97,
    provider: {
      MetaMask: { name: 'MetaMask' },
      WalletConnect: {
        name: 'WalletConnect',
        useProvider: 'rpc',
        provider: {
          rpc: {
            rpc: {
              [isProduction ? 56 : 97]: isProduction
                ? 'https://bsc-dataseed.binance.org/'
                : 'https://data-seed-prebsc-1-s1.binance.org:8545/',
            },
            chainId: isProduction ? 56 : 97,
          },
        },
      },
    },
  },
  'Celo-Chain': {
    name: 'Celo',
    chainId: isProduction ? 42220 : 44787,
    provider: {
      MetaMask: { name: 'MetaMask' },
      WalletConnect: {
        name: 'WalletConnect',
        useProvider: 'rpc',
        provider: {
          rpc: {
            rpc: {
              [isProduction ? 42220 : 44787]: isProduction
                ? 'https://forno.celo.org/'
                : 'https://alfajores-forno.celo-testnet.org/',
            },
            chainId: isProduction ? 42220 : 44787,
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
  type: isProduction ? 'mainnet' : 'testnet',
  names: Object.keys(ContractsNames),
  decimals: 18,
  params: {
  },
};
