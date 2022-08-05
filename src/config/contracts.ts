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
        address: '0x62630D99729457F8F3e7886277e1B4E23700Aa48',
        abi: tokenMintableFreezableAbi,
      },
    },
    tokenMintableNonFreezable: {
      mainnet: {
        address: '',
        abi: tokenMintableNonFreezableAbi,
      },
      testnet: {
        address: '0x5A24323b9166A2cED6D3ADaADf96969d3331Bb46',
        abi: tokenMintableNonFreezableAbi,
      },
    },
    tokenNonMintableFreezable: {
      mainnet: {
        address: '',
        abi: tokenNonMintableFreezableAbi,
      },
      testnet: {
        address: '0x699471954CA6C5cdD75E323530b818A373b7ccBd',
        abi: tokenNonMintableFreezableAbi,
      },
    },
    tokenNonMintableNonFreezable: {
      mainnet: {
        address: '',
        abi: tokenNonMintableNonFreezableAbi,
      },
      testnet: {
        address: '0xcDf7513524D4E481F2C53a02adFBE16993537950',
        abi: tokenNonMintableNonFreezableAbi,
      },
    },
    lostKeyFactory: {
      mainnet: {
        address: '',
        abi: lostKeyFactoryAbi,
      },
      testnet: {
        address: '0x164fe0D1F1b9b2A7cd074696f64858a67fE480b8',
        abi: lostKeyFactoryAbi,
      },
    },
    lastWillFactory: {
      mainnet: {
        address: '',
        abi: lastWillFactoryAbi,
      },
      testnet: {
        address: '0x45A2c024Cf173A30Ee66d7069F17AFF611F44C50',
        abi: lastWillFactoryAbi,
      },
    },

    crowdsaleSoftCappableBonusable: {
      mainnet: {
        address: '',
        abi: crowdsaleSoftCappableBonusableAbi,
      },
      testnet: {
        address: '0xeCBe5783bAB9EDfAEE160aD11ae17A4cd9A06260',
        abi: crowdsaleSoftCappableBonusableAbi,
      },
    },
    crowdsaleSoftCappableNonBonusable: {
      mainnet: {
        address: '',
        abi: crowdsaleSoftCappableNonBonusableAbi,
      },
      testnet: {
        address: '0x9a085AC67aa7bD86484d882C1697eaa83fB97a3a',
        abi: crowdsaleSoftCappableNonBonusableAbi,
      },
    },
    crowdsaleNonSoftCappableBonusable: {
      mainnet: {
        address: '',
        abi: crowdsaleNonSoftCappableBonusableAbi,
      },
      testnet: {
        address: '0x330e26CcE05689Ba83B638435e4cDe2D044b530F',
        abi: crowdsaleNonSoftCappableBonusableAbi,
      },
    },
    crowdsaleNonSoftCappableNonBonusable: {
      mainnet: {
        address: '',
        abi: crowdsaleNonSoftCappableNonBonusableAbi,
      },
      testnet: {
        address: '0x352919Fd9707128159C038CC3efcb66F6C898d24',
        abi: crowdsaleNonSoftCappableNonBonusableAbi,
      },
    },
    weddingFactory: {
      mainnet: {
        address: '',
        abi: weddingFactoryAbi,
      },
      testnet: {
        address: '0x917D930F2beD3591236346a5BCBf78dABE9708d0',
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
        address: '0x0C992f08dDC5ea8DbD8AC59113C64f7B08a91Bd0',
        abi: controllerAbi,
      },
    },
  },
};
