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
        address: '0x190a5d4643e55313906344176F61724fC138501c',
        abi: tokenMintableFreezableAbi,
      },
    },
    tokenMintableNonFreezable: {
      mainnet: {
        address: '',
        abi: tokenMintableNonFreezableAbi,
      },
      testnet: {
        address: '0x7493F5cFaBED25b024806CD4A8BBd0C9BD85C621',
        abi: tokenMintableNonFreezableAbi,
      },
    },
    tokenNonMintableFreezable: {
      mainnet: {
        address: '',
        abi: tokenNonMintableFreezableAbi,
      },
      testnet: {
        address: '0x1D514A42Db5989EcE3CDE5667a5de6553673Ce43',
        abi: tokenNonMintableFreezableAbi,
      },
    },
    tokenNonMintableNonFreezable: {
      mainnet: {
        address: '',
        abi: tokenNonMintableNonFreezableAbi,
      },
      testnet: {
        address: '0x5Ae924A9bE3a8964113979cCE50F6E21A1BC48Ec',
        abi: tokenNonMintableNonFreezableAbi,
      },
    },
    lostKeyFactory: {
      mainnet: {
        address: '',
        abi: lostKeyFactoryAbi,
      },
      testnet: {
        address: '0x911dA4CD8Ad943743E3D3B0696E030CE410B1F49',
        abi: lostKeyFactoryAbi,
      },
    },
    lastWillFactory: {
      mainnet: {
        address: '',
        abi: lastWillFactoryAbi,
      },
      testnet: {
        address: '0x28766Ea1D2E1046A0088BeeEA8e557F71C174585',
        abi: lastWillFactoryAbi,
      },
    },

    crowdsaleSoftCappableBonusable: {
      mainnet: {
        address: '',
        abi: crowdsaleSoftCappableBonusableAbi,
      },
      testnet: {
        address: '0x908F1f26eB430449a9580eD9c94B24547Bde6149',
        abi: crowdsaleSoftCappableBonusableAbi,
      },
    },
    crowdsaleSoftCappableNonBonusable: {
      mainnet: {
        address: '',
        abi: crowdsaleSoftCappableNonBonusableAbi,
      },
      testnet: {
        address: '0x9c7770baE39c21A7ef1542f59e5C316d8ED61185',
        abi: crowdsaleSoftCappableNonBonusableAbi,
      },
    },
    crowdsaleNonSoftCappableBonusable: {
      mainnet: {
        address: '',
        abi: crowdsaleNonSoftCappableBonusableAbi,
      },
      testnet: {
        address: '0xBDe26eD563DB2712e7c2b98AF35AFB020a9F3493',
        abi: crowdsaleNonSoftCappableBonusableAbi,
      },
    },
    crowdsaleNonSoftCappableNonBonusable: {
      mainnet: {
        address: '',
        abi: crowdsaleNonSoftCappableNonBonusableAbi,
      },
      testnet: {
        address: '0x363404aC04b2A76f09eA14AE79172b1aA3a28d3B',
        abi: crowdsaleNonSoftCappableNonBonusableAbi,
      },
    },
    weddingFactory: {
      mainnet: {
        address: '',
        abi: weddingFactoryAbi,
      },
      testnet: {
        address: '0x1BD1FaF3Fc5F560F7c0652704d8Ac09b7186a102',
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
        address: '0x809256E01DEF2A3A06868b1b6E1F0F0DB6726227',
        abi: controllerAbi,
      },
    },
  },
};
