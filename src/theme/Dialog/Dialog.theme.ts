import { Theme } from '@material-ui/core';
import { Overrides } from '@material-ui/core/styles/overrides';
import { ComponentsProps } from '@material-ui/core/styles/props';
import { COLOR_BLACK_2, COLOR_BLACK_3 } from 'theme/colors';

export const getMuiDialogProps = (theme: Theme): Overrides['MuiDialog'] => ({
  root: {
  },
  paper: {
    border: `1px solid ${COLOR_BLACK_3}`,
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    background: COLOR_BLACK_2,
    borderRadius: theme.spacing(2),
  },
});

export const getMuiDialogDefaultProps = (): ComponentsProps['MuiDialog'] => ({});
