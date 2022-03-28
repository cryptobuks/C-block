import { PreviewProps } from './Preview';

export const previewPropsMocked: PreviewProps = {
  type: 'token',
  address: '0x142142421',
  name: '',
  launchAction(): void {
    throw new Error('Function not implemented.');
  },
  editAction(): void {
    throw new Error('Function not implemented.');
  },
  deleteAction(): void {
    throw new Error('Function not implemented.');
  },
};
