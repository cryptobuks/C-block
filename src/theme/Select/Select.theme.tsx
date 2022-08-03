import { Overrides } from '@material-ui/core/styles/overrides';
import {
  COLOR_BLACK_9,
} from '../colors';

export const getMuiPaper = (): Overrides['MuiPaper'] => ({
  root: {
    left: 0,
  },
});

export const getMuiListItem = (): Overrides['MuiListItem'] => ({
  button: {
    '&:hover': {
      backgroundColor: COLOR_BLACK_9,
    },
  },
});
