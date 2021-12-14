import React from 'react';

import { Box } from '@material-ui/core';

import { Breadcrumbs } from './Breadcrumbs';
import { breadcrumbsPropsMocked } from './Breadcrumbs.mock';

export default {
  title: 'components/Breadcrumbs',
  component: Breadcrumbs,
};

export const Default: React.FC = () => (
  <>
    <Box>
      <Breadcrumbs
        {...breadcrumbsPropsMocked}
      />
    </Box>
  </>
);
