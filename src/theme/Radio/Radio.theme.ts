/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme } from '@material-ui/core/styles';
import { Overrides } from '@material-ui/core/styles/overrides';
import { ComponentsProps } from '@material-ui/core/styles/props';

export const getMuiRadio = (theme: Theme): Overrides['MuiRadio'] => ({
  root: {
    background: 'transparent',
    '&:active, &:hover': {
      background: 'transparent',
    },
  },
});

export const getMuiRadioDefaultProps = (): ComponentsProps['MuiRadio'] => ({
  color: 'default',
  disableRipple: true,
});
