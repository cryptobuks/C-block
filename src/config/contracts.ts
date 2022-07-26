import { ContractsNames, IContracts } from 'types';
import {
  bep20Abi,
  tokenMintableFreezableAbi,
  tokenMintableNonFreezableAbi,
  tokenNonMintableFreezableAbi,
  tokenNonMintableNonFreezableAbi,
  lostKeyFactoryAbi,
  crowdsaleSoftCappableBonusableAbi,
  crowdsaleSoftCappableNonBonusableAbi,
  crowdsaleNonSoftCappableBonusableAbi,
  crowdsaleNonSoftCappableNonBonusableAbi,
  weddingFactoryAbi,
  lastWillFactoryAbi,
  controllerAbi,
} from './abi';

export const contracts: IContracts = {
  type: 'mainnet',
  names: Object.keys(ContractsNames),
  decimals: 18,
  params: {
    celo: {
      mainnet: {
        address: '0x471EcE3750Da237f93B8E339c536989b8978a438',
        abi: bep20Abi,
      },
      testnet: {
        address: '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9',
        abi: bep20Abi,
      },
    },
    cusd: {
      mainnet: {
        address: '0x765DE816845861e75A25fCA122bb6898B8B1282a',
        abi: bep20Abi,
      },
      testnet: {
        address: '0x874069fa1eb16d44d622f2e0ca25eea172369bc1',
        abi: bep20Abi,
      },
    },
    tokenMintableFreezable: {
      mainnet: {
        address: '',
        abi: tokenMintableFreezableAbi,
      },
      testnet: {
        address: '0x498EC59D0c0E1A3290caAA191C7A8424B7bbC0A5',
        abi: tokenMintableFreezableAbi,
      },
    },
    tokenMintableNonFreezable: {
      mainnet: {
        address: '',
        abi: tokenMintableNonFreezableAbi,
      },
      testnet: {
        address: '0xd6e95f22Ea7A6Cec21079750AD9596BA8E1aB40C',
        abi: tokenMintableNonFreezableAbi,
      },
    },
    tokenNonMintableFreezable: {
      mainnet: {
        address: '',
        abi: tokenNonMintableFreezableAbi,
      },
      testnet: {
        address: '0x60C73eb264713d5FD6E0439680Be6AB5A1C4bc51',
        abi: tokenNonMintableFreezableAbi,
      },
    },
    tokenNonMintableNonFreezable: {
      mainnet: {
        address: '',
        abi: tokenNonMintableNonFreezableAbi,
      },
      testnet: {
        address: '0x0BBFc598905da02e2Fe1652A46BeE3223bc74426',
        abi: tokenNonMintableNonFreezableAbi,
      },
    },
    lostKeyFactory: {
      mainnet: {
        address: '',
        abi: lostKeyFactoryAbi,
      },
      testnet: {
        address: '0xB1Ade1751F0EEa77B4189DF78257282D5007166c',
        abi: lostKeyFactoryAbi,
      },
    },
    lastWillFactory: {
      mainnet: {
        address: '',
        abi: lastWillFactoryAbi,
      },
      testnet: {
        address: '0x505fe0D1008B691290bB57a4F0dA2e85146cb171',
        abi: lastWillFactoryAbi,
      },
    },

    crowdsaleSoftCappableBonusable: {
      mainnet: {
        address: '',
        abi: crowdsaleSoftCappableBonusableAbi,
      },
      testnet: {
        address: '0x8ca30Ee70Ed3B2CdB1F7baa8a4C4B871A8A37a2d',
        abi: crowdsaleSoftCappableBonusableAbi,
      },
    },
    crowdsaleSoftCappableNonBonusable: {
      mainnet: {
        address: '',
        abi: crowdsaleSoftCappableNonBonusableAbi,
      },
      testnet: {
        address: '0x42Eb7Fc1feC1abe140A394253Cc3C36d711c6565',
        abi: crowdsaleSoftCappableNonBonusableAbi,
      },
    },
    crowdsaleNonSoftCappableBonusable: {
      mainnet: {
        address: '',
        abi: crowdsaleNonSoftCappableBonusableAbi,
      },
      testnet: {
        address: '0x23B445c576f4d2F7e065Db87d68Ac38cbDc67B0d',
        abi: crowdsaleNonSoftCappableBonusableAbi,
      },
    },
    crowdsaleNonSoftCappableNonBonusable: {
      mainnet: {
        address: '',
        abi: crowdsaleNonSoftCappableNonBonusableAbi,
      },
      testnet: {
        address: '0xc6eCD7F4FcBcf49Fed1aCFEa5586ff8f7B916CDa',
        abi: crowdsaleNonSoftCappableNonBonusableAbi,
      },
    },
    weddingFactory: {
      mainnet: {
        address: '',
        abi: weddingFactoryAbi,
      },
      testnet: {
        address: '0x0741614e8832A3497E2fB7ee344bbd25CbB00C96',
        abi: weddingFactoryAbi,
      },
    },
    // all the contracts controller (to setPrice, changeManagementAddress etc.)
    controller: {
      mainnet: {
        address: '',
        abi: controllerAbi,
      },
      testnet: {
        address: '0xd584e695D6bc250084D1FC472792A2E0E1303D4C',
        abi: controllerAbi,
      },
    },
  },
};
