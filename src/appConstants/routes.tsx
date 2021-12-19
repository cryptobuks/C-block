import React from 'react';
import { ContractToken, CrowdsaleIcon } from 'theme/icons';

const CREATE_CONTRACT = '/create-contract';

export const routes = {
  root: CREATE_CONTRACT,
  title: 'Create Contract',
  icon: null,
  'token-contract': {
    root: `${CREATE_CONTRACT}/token-contract`,
    title: 'Token Contract',
    icon: <ContractToken />,
  },
  'crowdsale-contract': {
    root: `${CREATE_CONTRACT}/crowdsale-contract`,
    title: 'Crowdsale Contract',
    icon: <CrowdsaleIcon />,
  },
  'my-contracts': {
    root: '/my-contracts',
    title: 'My contracts',
    icon: null,
  },
  'custom-development': {
    root: '/custom-development',
    title: 'Custom development',
    icon: null,
  },
};
