import { Theme } from '@material-ui/core';
import { BreakpointsOptions } from '@material-ui/core/styles/createBreakpoints';
import { Overrides } from '@material-ui/core/styles/overrides';
import { ComponentsProps } from '@material-ui/core/styles/props';

export const breakpointOptions: BreakpointsOptions = {
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  values: {
    xs: 320, sm: 600, md: 1024, lg: 1153, xl: 1680,
  },
};

export const getMuiGrid = (theme: Theme): Overrides['MuiGrid'] => ({
  root: {
    margin: -theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      margin: -theme.spacing(1.25),
    },
  },
  container: {
    height: `calc(100% + ${theme.spacing(2)}px)`,
    width: `calc(100% + ${theme.spacing(2)}px)`,
    [theme.breakpoints.up('sm')]: {
      height: `calc(100% + ${theme.spacing(2)}px)`,
      width: `calc(100% + ${theme.spacing(2)}px)`,
    },
  },
  item: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: { padding: theme.spacing(1.25) },
  },
});

export const getMuiGridDefaultProps = (): ComponentsProps['MuiGrid'] => ({});
