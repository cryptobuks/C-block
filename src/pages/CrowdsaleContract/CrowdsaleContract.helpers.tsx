/* eslint-disable newline-per-chained-call */
import { ReactElement } from 'react';
// import { Snowflake } from 'theme/icons';
import * as Yup from 'yup';

const latinAndNumbers = /^[A-Za-z][A-Za-z0-9][0-9A-Za-z]*$/;
const numbers = /^[0-9.]*$/;
// const yesterday = new Date(Date.now() - 86400000);

export const validationSchema = Yup.object().shape({
  contractName: Yup.string().matches(latinAndNumbers).min(5).required(),
  tokenAddress: Yup.string().length(42).required(),
  crowdsaleOwner: Yup.string().length(42).required(),
  // tokenSymbol: Yup.string().matches(latinAndNumbers).min(3).max(4).required(),
  // decimals: Yup.number().max(18).required(),
  futureMinting: Yup.boolean().required(),
  burnable: Yup.boolean().required(),
  freezable: Yup.boolean().required(),
  tokens: Yup.array().of(
    Yup.object().shape({
      address: Yup.string().length(42).required(),
      rate: Yup.string().matches(numbers).min(1).max(100000).required(),
      // amount: Yup.number().required(),
      // isFrozen: Yup.boolean().required(),
      // frozenUntilDate: Yup.date().min(yesterday).required(),
    }),
  ),
});

type CrowdsaleContractFieldType = {
  id: string;
  name: string;
  icon?: ReactElement;
  renderProps: {
    label: string;
    name: string;
  } & Record<string, string>;
  helperText: string[];
  isShort?: boolean;
};

type CrowdsaleContractFormConfig = CrowdsaleContractFieldType[][];

export const tokenContractFormConfigStart: CrowdsaleContractFormConfig = [
  [
    {
      id: 'contractName',
      name: 'contractName',
      renderProps: {
        label: 'Contract name',
        name: 'contractName',
      },
      helperText: [],
      // helperText: ['Enter name of the project without spaces, usually 5-25 symbols. Lower and uppercase can be used'],
    },
  ],
  [
    {
      id: 'tokenAddress',
      name: 'tokenAddress',
      renderProps: {
        label: 'Token address',
        name: 'tokenAddress',
      },
      helperText: [
        'Please provide the address of your token that you will sell. Kindly note that deflationary tokens are supported but we don`t take responsibility for its commissions.',
      ],
    },
    {
      id: 'crowdsaleOwner',
      name: 'crowdsaleOwner',
      renderProps: {
        label: 'Crowdsale owner',
        name: 'crowdsaleOwner',
      },
      helperText: [
        'Celo address (not exchange address). This address will be owner of the crowdsale (after sale end date). Double check the address (and access to it) before submission',
      ],
    },
    // {
    //   id: 'tokenSymbol',
    //   name: 'tokenSymbol',
    //   renderProps: {
    //     label: 'Token Symbol',
    //     name: 'tokenSymbol',
    //   },
    //   helperText: ['Usually 3-4 Letters like ETH, BTC, NEO3, WISH etc.. Please check that it’s unique before submission'],
    // },
    // {
    //   id: 'decimals',
    //   name: 'decimals',
    //   renderProps: {
    //     label: 'Decimals',
    //     name: 'decimals',
    //   },
    //   isShort: true,
    //   helperText: ['Defines the number of decimals for the token. 0-18 numerals are accepted. 18 as common practice'],
    // },
  ],
];

export const dynamicFormDataConfig: CrowdsaleContractFieldType[] = [
  {
    id: 'address',
    name: 'address',
    renderProps: {
      label: 'Token address',
      name: 'tokenAddress',
      type: 'input',
    },
    helperText: [
      'Please provide the address of the token that will be accepted from users as payment method.',
    ],
  },
  {
    id: 'rate',
    name: 'rate',
    isShort: true,
    renderProps: {
      label: 'Token rate',
      name: 'tokenRate',
      type: 'input',
    },
    helperText: [
      'Defines the rate of your token. 1-100000 numerals are accepted.',
    ],
  },
  // {
  //   id: 'amount',
  //   name: 'amount',
  //   renderProps: {
  //     label: 'Token amount',
  //     name: 'amount',
  //     type: 'input',
  //   },
  //   helperText: [],
  // },
  // {
  //   id: 'isFrozen',
  //   name: 'isFrozen',
  //   icon: <Snowflake />,
  //   renderProps: {
  //     label: 'Frozen until date',
  //     name: 'isFrozen',
  //     type: 'switch',
  //   },
  // },
  // {
  //   id: 'frozenUntilDate',
  //   name: 'frozenUntilDate',
  //   isShort: true,
  //   renderProps: {
  //     label: '',
  //     name: 'frozenUntilDate',
  //     type: 'date',
  //   },
  //   helperText: [],
  // },
];

export const crowdsaleContractFormConfigSoftcap: CrowdsaleContractFieldType[] = [
  {
    id: 'softcapTokens',
    name: 'softcapTokens',
    renderProps: {
      label: 'Soft cap tokens',
      name: 'softcapTokens',
      type: 'switch',
    },
    helperText: [
      'Yes - you can create more tokens in the future & use token for Crowdsale.',
      'No - no more tokens will be created in the future. Crowdsale is impossible.',
    ],
  },
];

export const tokenContractFormConfigEnd: CrowdsaleContractFieldType[] = [
  {
    id: 'futureMinting',
    name: 'futureMinting',
    renderProps: {
      label: 'Future minting',
      name: 'futureMinting',
      type: 'switch',
    },
    helperText: [
      'Yes - you can create more tokens in the future & use token for Crowdsale.',
      'No - no more tokens will be created in the future. Crowdsale is impossible.',
    ],
  },
  {
    id: 'burnable',
    name: 'burnable',
    renderProps: {
      label: 'Burnable',
      name: 'burnable',
      type: 'switch',
    },
    helperText: [
      'Yes - you can permanently remove token from circulation and reduce the supply.',
    ],
  },
  {
    id: 'freezable',
    name: 'freezable',
    renderProps: {
      label: 'Freezable',
      name: 'freezable',
      type: 'switch',
    },
    helperText: [
      'Yes - you can freeze transfers of the specified users.',
      'No - you can`t freeze.',
    ],
  },
];
