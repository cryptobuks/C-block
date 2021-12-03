import React from 'react';

import { Box } from '@material-ui/core';

import { toastifyPropsMocked } from './Toastify.mock';
import { Toastify } from './Toastify';

export default {
  title: 'components/Toastify',
  component: Toastify,
};

export const Default: React.FC = () => (
  <>
    <Box>
      {toastifyPropsMocked.map((toastify) => (
        <Toastify {...toastify} />
      ))}
    </Box>
  </>
);
