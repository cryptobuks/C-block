import { CSSProperties } from '@material-ui/styles';

export const flexHelper = (justifyContent = 'center', alignItems = 'center'): CSSProperties => ({
  display: 'flex',
  justifyContent,
  alignItems,
});
