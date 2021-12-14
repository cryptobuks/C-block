import React from 'react';
import { ContractToken } from 'theme/icons';

export const routes = {
  root: '/create-contract',
  title: 'Create Contract',
  icon: null,
  'token-contract': {
    root: '/create-contract/token-contract',
    title: 'Token Contract',
    icon: <ContractToken />,
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
