import { ComponentProps } from 'react';
import { MintTokenModal } from './MintTokenModal';

export const mockedProps: ComponentProps<typeof MintTokenModal> = {
  open: true,
  freezable: true,
  onClose(): void {
    throw new Error('Function not implemented.');
  },
  setIsModalOpen() {},
};
