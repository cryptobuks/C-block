import React, { FC } from 'react';
import { Container } from '@material-ui/core';

import { SetUpModal } from './SetUpModal';

import { mockedProps } from './SetUpModal.mock';

export default {
  title: 'components/SetUpModal',
  component: SetUpModal,
  decorators: [
    (Story) => (<Container><Story /></Container>),
  ],
};

export const Default: FC = () => (<SetUpModal {...mockedProps} />);
