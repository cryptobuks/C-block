import { Theme } from '@material-ui/core';
import { Overrides } from '@material-ui/core/styles/overrides';
import { ComponentsProps } from '@material-ui/core/styles/props';

import {
  COLOR_AKZ, COLOR_BLACK, COLOR_BLACK_4,
} from '../colors';

export const getMuiSwitch = (theme: Theme): Overrides['MuiSwitch'] => {
  const trackSize = {
    width: '32px',
    height: '20px',
    borderRadius: '64px',
    padding: 0,
  };

  const switchBaseSize = {
    padding: 0,
    width: trackSize.height,
    height: trackSize.height,
    borderRadius: '50%',
  };

  return {
    root: {
      ...trackSize,
      opacity: '1 !important',
      margin: theme.spacing(1),
      overflow: 'visible',

      '&:focus-within::before': {
        display: 'block',
      },
    },
    track: {
      ...trackSize,
      opacity: 0.5,
      backgroundColor: COLOR_BLACK_4,

      '.MuiSwitch-switchBase$checked + &': {
        background: COLOR_AKZ,
        opacity: 1,
      },
      '.MuiSwitch-root:hover &': {
        opacity: 0.75,
      },
      '.MuiSwitch-root:active .MuiSwitch-switchBase:not($disabled) + &': {
        opacity: 1,
      },
      '.MuiSwitch-root:active .MuiSwitch-switchBase$checked:not($disabled) + &': {
        opacity: 0.5,
      },
      '.MuiSwitch-switchBase.Mui-disabled + &': {
        opacity: 0.25,
      },
    },
    switchBase: {
      ...switchBaseSize,
      background: 'transparent',
      opacity: '1 !important',

      '&, &:hover, &:active': {
        background: 'transparent',
      },

      '&$checked': {
        '&, &:hover, &:active': {
          background: 'transparent',
        },

        transform: `translateX(calc(${trackSize.width} - 100%))`,
      },
    },
    input: {
      top: 0,
      left: 0,
      // ...switchBaseSize,
    },
    thumb: {
      backgroundColor: COLOR_BLACK,
      boxShadow: 'unset',
      width: 18,
      height: 18,
      border: 'none',
    },
  };
};

export const getMuiSwitchDefaultProps = (): ComponentsProps['MuiSwitch'] => ({
  color: 'primary',
});
