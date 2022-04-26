import React, { FC } from 'react';
import { Container } from '@material-ui/core';

import { BurnTokenModal } from './BurnTokenModal';

import { mockedProps } from './BurnTokenModal.mock';

export default {
  title: 'components/BurnTokenModal',
  component: BurnTokenModal,
  decorators: [
    (Story) => (<Container><Story /></Container>),
  ],
};

export const Default: FC = () => (<BurnTokenModal {...mockedProps} />);
