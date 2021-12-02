import { Theme } from '@material-ui/core/styles';
import { Overrides } from '@material-ui/core/styles/overrides';
import { ComponentsProps } from '@material-ui/core/styles/props';

export const getMuiContainer = (theme: Theme): Overrides['MuiContainer'] => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    maxWidth: 2560,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
  },
});

export const getMuiContainerDefaultProps = (): ComponentsProps['MuiContainer'] => ({ maxWidth: false });
