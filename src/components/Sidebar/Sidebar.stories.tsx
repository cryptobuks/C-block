import React from 'react';

import { Box } from '@material-ui/core';

import { Sidebar } from 'components/Sidebar';
import { sidebarPropsMocked } from './Sidebar.mock';

export default {
  title: 'components/Sidebar',
  component: Sidebar,
};

export const Default: React.FC = () => (
  <>
    <Box>
      <Sidebar {...sidebarPropsMocked} />
    </Box>
  </>
);
