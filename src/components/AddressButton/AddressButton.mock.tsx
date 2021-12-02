import { AddressButtonProps } from './AddressButton';

export const addressButtonPropsMocked: AddressButtonProps = {
  onClick(): void {
    throw new Error('Function not implemented.');
  },
  address: '',
};
