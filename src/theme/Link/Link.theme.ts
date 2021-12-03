import { LinkProps, Theme } from '@material-ui/core';
import { Overrides } from '@material-ui/core/styles/overrides';

export const getMuiLinkDefaultProps = (): LinkProps => ({
  underline: 'always',
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getMuiLinkOverride = (theme: Theme): Overrides['MuiLink'] => ({
  root: {
    cursor: 'pointer',
    color: theme.palette.primary.dark,
    fontWeight: 'inherit',
    fontStyle: 'inherit',
  },
});
