import { Theme } from '@material-ui/core';
import { Overrides } from '@material-ui/core/styles/overrides';
import { COLOR_GREY_1 } from '../colors';

export const getMuiPaper = (): Overrides['MuiPaper'] => ({
  root: {
    left: 0,
  },
});

export const getMuiMenu = (theme: Theme): Overrides['MuiMenu'] => ({
  paper: {
    marginTop: theme.spacing(1),
    background: 'transparent',
    backdropFilter: 'blur(30px)',
    border: `1px solid ${COLOR_GREY_1}`,
    borderRadius: 12,
    overflow: 'hidden',
  },
});

export const getMuiMenuItem = (): Overrides['MuiMenuItem'] => ({
  root: {
    '&$selected': {
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: COLOR_GREY_1,
      },
    },
  },
});

export const getMuiListItem = (): Overrides['MuiListItem'] => ({
  button: {
    '&:hover': {
      backgroundColor: COLOR_GREY_1,
    },
  },
});

export const getMuiSelect = (): Overrides['MuiSelect'] => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    background: 'transparent',
    '&:focus': {
      background: 'none !important',
    },
    '& fieldset': {
      borderWidth: 1,
      borderColor: 'red',
    },
  },
});
