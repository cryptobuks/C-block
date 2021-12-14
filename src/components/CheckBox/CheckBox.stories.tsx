import React from 'react';

import { Box } from '@material-ui/core';

import { CheckBox } from './CheckBox';
import { checkBoxPropsMocked } from './CheckBox.mock';

export default {
  title: 'components/CheckBox',
  component: CheckBox,
};

export const Default: React.FC = () => (
  <>
    <Box>
      <CheckBox
        {...checkBoxPropsMocked}
      />
    </Box>
  </>
);
