import React from 'react';

import { Box } from '@material-ui/core';

import { AddressButton } from './AddressButton';
import { addressButtonPropsMocked } from './AddressButton.mock';

export default {
  title: 'components/AddressButton',
  component: AddressButton,
};

export const Default: React.FC = () => (
  <>
    <Box>
      <AddressButton
        {...addressButtonPropsMocked}
      />
    </Box>
  </>
);
