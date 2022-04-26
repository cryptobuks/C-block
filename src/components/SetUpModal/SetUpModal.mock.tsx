import { ComponentProps } from 'react';
import { SetUpModal } from './SetUpModal';

export const mockedProps: ComponentProps<typeof SetUpModal> = {
  open: true,
  contractAddress: '0x1234567890',
  onClose(): void {
    throw new Error('Function not implemented.');
  },
  setIsModalOpen() {},
};
