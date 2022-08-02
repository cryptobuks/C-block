import { Theme } from '@material-ui/core';
import { Overrides } from '@material-ui/core/styles/overrides';
import {
  COLOR_BLACK_1, COLOR_BLACK_3, COLOR_BLACK_9, COLOR_GREY_4,
} from '../colors';

export const getMuiPaper = (): Overrides['MuiPaper'] => ({
  root: {
    left: 0,
  },
});

export const getMuiMenu = (theme: Theme): Overrides['MuiMenu'] => ({
  paper: {
    marginTop: theme.spacing(1),
    background: theme.palette.type === 'dark' ? COLOR_BLACK_1 : COLOR_GREY_4,
    border: `1px solid ${COLOR_BLACK_3}`,
    margin: 5,
    borderRadius: 12,
    overflow: 'hidden',
    padding: theme.spacing(3, 0),
    marginLeft: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(3),
    },
    maxHeight: 419,
    height: '100%',
    overflowY: 'scroll',
  },
});

export const getMuiMenuItem = (theme: Theme): Overrides['MuiMenuItem'] => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    '&$selected': {
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: COLOR_BLACK_9,
      },
    },
  },
});
//
export const getMuiListItem = (): Overrides['MuiListItem'] => ({
  button: {
    '&:hover': {
      backgroundColor: COLOR_BLACK_9,
    },
  },
});

// export const getMuiSelect = (): Overrides['MuiSelect'] => ({
//   root: {
//     display: 'flex',
//     alignItems: 'center',
//     background: 'transparent',
//     '&:focus': {
//       background: 'none !important',
//     },
//     '& fieldset': {
//       borderWidth: 1,
//       borderColor: 'red',
//     },
//   },
// });
