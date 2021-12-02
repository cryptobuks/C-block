import { Theme } from '@material-ui/core';
import { Overrides } from '@material-ui/core/styles/overrides';

import {
  COLOR_BLACK,
  COLOR_AKZ,
  COLOR_WHITE,
  COLOR_BLACK_1,
  COLOR_BLACK_3,
  COLOR_ACID_GREEN,
} from 'theme/colors';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getMuiIconButton = (theme: Theme): Overrides['MuiIconButton'] => ({
  root: {
    width: 48,
    height: 48,
    borderRadius: '50%',
    color: COLOR_BLACK,
    background: COLOR_AKZ,
    '&:hover': {
      background: COLOR_AKZ,
    },
    '&:active': {
      background: COLOR_AKZ,
    },
    '&$disabled': {
      opacity: 0.5,
      color: COLOR_BLACK,
      backgroundColor: 'transparent',
    },
  },
  colorPrimary: {
    color: COLOR_WHITE,
    background: COLOR_BLACK_1,
    border: `1px solid ${COLOR_BLACK_3}`,
    width: 48,
    height: 48,
    '&:hover': {
      background: `${COLOR_BLACK_3} !important`,
    },
    '&:active': {
      background: COLOR_BLACK,
    },
    '&$disabled': {
      opacity: 0.25,
      backgroundColor: COLOR_BLACK,
    },
    '& > *': {
      '& > *': {
        fill: COLOR_ACID_GREEN,
      },
    },
  },
  colorSecondary: {
    color: COLOR_BLACK,
    background: 'transparent',
    width: 24,
    height: 24,
    borderRadius: '50%',
    '&:hover': {
      borderWidth: 0,
      borderColor: COLOR_BLACK,
      color: COLOR_BLACK,
      background: 'transparent !important',
    },
    '&:active': {
      borderWidth: 0,
      borderColor: COLOR_BLACK,
      color: COLOR_BLACK,
      background: 'transparent',
    },
    '&$disabled': {
      opacity: 0.5,
      borderWidth: 0,
      color: COLOR_BLACK,
      borderColor: COLOR_BLACK,
    },
  },
});
