import React from 'react';

import { Box } from '@material-ui/core';

import { Modal } from './Modal';
import { modalPropsMocked } from './Modal.mock';

export default {
  title: 'components/Modal',
  component: Modal,
};

export const Default: React.FC = () => (
  <>
    <Box>
      <Modal
        {...modalPropsMocked}
      />
    </Box>
  </>
);
