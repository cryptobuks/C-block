import React from 'react';

import { Box } from '@material-ui/core';

import { Header } from 'containers';
import { headerPropsMocked } from './Header.mock';

export default {
  title: 'components/Header',
  component: Header,
};

export const Default: React.FC = () => (
  <>
    <Box>
      <Header {...headerPropsMocked} />
    </Box>
  </>
);
