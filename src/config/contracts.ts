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
        address: '0x3BecF85b148927eB0d47950bA7deBA0c01b085E4',
        abi: tokenMintableFreezableAbi,
      },
      testnet: {
        address: '0x498EC59D0c0E1A3290caAA191C7A8424B7bbC0A5',
        abi: tokenMintableFreezableAbi,
      },
    },
    tokenMintableNonFreezable: {
      mainnet: {
        address: '0xe68CB2F7f9c0e964E51Fe3c24b1013C9500aE42F',
        abi: tokenMintableNonFreezableAbi,
      },
      testnet: {
        address: '0xd6e95f22Ea7A6Cec21079750AD9596BA8E1aB40C',
        abi: tokenMintableNonFreezableAbi,
      },
    },
    tokenNonMintableFreezable: {
      mainnet: {
        address: '0x5a30Cbe720a8F34b59b3B78716AcC0D8e0Ea00bc',
        abi: tokenNonMintableFreezableAbi,
      },
      testnet: {
        address: '0x60C73eb264713d5FD6E0439680Be6AB5A1C4bc51',
        abi: tokenNonMintableFreezableAbi,
      },
    },
    tokenNonMintableNonFreezable: {
      mainnet: {
        address: '0x06d138Af9ac244b60CF14E87e149d4D5Fe576F86',
        abi: tokenNonMintableNonFreezableAbi,
      },
      testnet: {
        address: '0x0BBFc598905da02e2Fe1652A46BeE3223bc74426',
        abi: tokenNonMintableNonFreezableAbi,
      },
    },

    lostKeyFactory: {
      mainnet: {
        address: '0xE53BBa908F9364814F1c8fBBd064472e29e3E51E',
        abi: lostKeyFactoryAbi,
      },
      testnet: {
        address: '0xB1Ade1751F0EEa77B4189DF78257282D5007166c',
        abi: lostKeyFactoryAbi,
      },
    },
    lastWillFactory: {
      mainnet: {
        address: '0x602a846BB3bc73d4f6708Bb27571f28621FB5fCd',
        abi: lastWillFactoryAbi,
      },
      testnet: {
        address: '0x505fe0D1008B691290bB57a4F0dA2e85146cb171',
        abi: lastWillFactoryAbi,
      },
    },
    weddingFactory: {
      mainnet: {
        address: '0xb808018e248a0DE81E02123341518cBfc79EA292',
        abi: weddingFactoryAbi,
      },
      testnet: {
        address: '0x0741614e8832A3497E2fB7ee344bbd25CbB00C96',
        abi: weddingFactoryAbi,
      },
    },

    crowdsaleSoftCappableBonusable: {
      mainnet: {
        address: '0x931Db767fd13B3006608f0a66BB733FEe0a84A93',
        abi: crowdsaleSoftCappableBonusableAbi,
      },
      testnet: {
        address: '0x8ca30Ee70Ed3B2CdB1F7baa8a4C4B871A8A37a2d',
        abi: crowdsaleSoftCappableBonusableAbi,
      },
    },
    crowdsaleSoftCappableNonBonusable: {
      mainnet: {
        address: '0x1CfD9444B52CC5d5f949f44fa1f108DCc2c8cea4',
        abi: crowdsaleSoftCappableNonBonusableAbi,
      },
      testnet: {
        address: '0x42Eb7Fc1feC1abe140A394253Cc3C36d711c6565',
        abi: crowdsaleSoftCappableNonBonusableAbi,
      },
    },
    crowdsaleNonSoftCappableBonusable: {
      mainnet: {
        address: '0x5616365dAB96c0c2461938b03F553D32dC5f272F',
        abi: crowdsaleNonSoftCappableBonusableAbi,
      },
      testnet: {
        address: '0x23B445c576f4d2F7e065Db87d68Ac38cbDc67B0d',
        abi: crowdsaleNonSoftCappableBonusableAbi,
      },
    },
    crowdsaleNonSoftCappableNonBonusable: {
      mainnet: {
        address: '0x095307Ec1D3fb984FFfc35F347F8A74f93268FB1',
        abi: crowdsaleNonSoftCappableNonBonusableAbi,
      },
      testnet: {
        address: '0xc6eCD7F4FcBcf49Fed1aCFEa5586ff8f7B916CDa',
        abi: crowdsaleNonSoftCappableNonBonusableAbi,
      },
    },
    // all the contracts controller (to setPrice, changeManagementAddress etc.)
    controller: {
      mainnet: {
        address: '0x22B1741be6bF2be1a17d739cbD6321B44f52e905',
        abi: controllerAbi,
      },
      testnet: {
        address: '0xd584e695D6bc250084D1FC472792A2E0E1303D4C',
        abi: controllerAbi,
      },
    },
  },
};
