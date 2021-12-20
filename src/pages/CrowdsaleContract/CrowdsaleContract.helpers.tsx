/* eslint-disable newline-per-chained-call */
import { TextFieldProps } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { Calendar, DescendingSortOrderIcon } from 'theme/icons';
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
  softcapTokens: Yup.number().integer().min(0).required(),
  saleDuration: Yup.number().integer().min(1).required(),
  // futureMinting: Yup.boolean().required(),
  // burnable: Yup.boolean().required(),
  // freezable: Yup.boolean().required(),
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
  renderProps?: {
    label: string;
    name: string;
    // type?: string;
  } & TextFieldProps;
  helperText: string[];
  infoText?: string[];
  isShort?: boolean;
};

type CrowdsaleContractFormConfig = CrowdsaleContractFieldType[][];

// interface ICrowdsaleContractSwitchableSection {
//   id: string;
//   title: string;
//   description: string;
//   fields: CrowdsaleContractFieldType[];
// }

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
      InputProps: { endAdornment: <DescendingSortOrderIcon /> },
    },
    helperText: [
      'Defines the minimum number of tokens that needs to be sold for the project continuation. If soft cap is not reached - contributors get their investments back, project gets nothing. You can set it to 0 (no soft cap).',
    ],
    infoText: [
      'If softcap > 0 all investments are stored on the vault contract until the end of crowdsale.',
      'If you need to get investments on your address right away set softcap = 0.',
    ],
  },
];

export const crowdsaleContractFormConfigSaleDuration: CrowdsaleContractFieldType[] = [
  {
    id: 'saleDuration',
    name: 'saleDuration',
    renderProps: {
      label: 'Duration of Sale',
      name: 'saleDuration',
    },
    helperText: [
      'Define the number of days of how long the crowdsale will last.',
    ],
  },
];

// export const crowdsaleContractFormConfigEnd:

interface ICrowdsaleContractFlagOption extends CrowdsaleContractFieldType {
  title: string;
}

export const crowdsaleContractFormConfigFlagOptions: ICrowdsaleContractFlagOption[] = [
  {
    id: 'changingDates',
    name: 'changingDates',
    title: 'Changing dates',
    icon: <Calendar />,
    helperText: [
      'Finish Dates can be changed manually after Contract Deployment. You can prolong sale or finish it early. Otherwise, dates are hardcoded and can`t be changed.',
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
