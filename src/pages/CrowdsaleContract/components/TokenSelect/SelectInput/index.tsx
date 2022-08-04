import { styled, InputBase } from '@material-ui/core';
import { COLOR_BLACK_3 } from 'theme/colors';
import { flexHelper } from 'utils';

export const SelectInput = styled(InputBase)(({ theme }) => ({
  'label + &': {},
  '&.MuiInputBase-root': {
    height: '56px',
    position: 'relative',
  },
  '& .MuiInputBase-input': {
    position: 'relative',
    boxSizing: 'border-box',
    padding: '6px 42px 7px 24px !important',
    ...flexHelper('center'),
    width: '150px',
    height: '100%',
    borderLeft: `1px solid ${COLOR_BLACK_3}`,
    borderRadius: 0,
    zIndex: 100,
    [theme.breakpoints.down('sm')]: {},
  },
}));
