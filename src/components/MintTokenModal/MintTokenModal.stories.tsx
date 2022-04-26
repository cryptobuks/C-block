import React, { FC } from 'react';
import { Container } from '@material-ui/core';

import { MintTokenModal } from './MintTokenModal';

import { mockedProps } from './MintTokenModal.mock';

export default {
  title: 'components/MintTokenModal',
  component: MintTokenModal,
  decorators: [
    (Story) => (<Container><Story /></Container>),
  ],
};

export const Default: FC = () => (<MintTokenModal {...mockedProps} />);
