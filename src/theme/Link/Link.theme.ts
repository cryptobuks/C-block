import { LinkProps, Theme } from '@material-ui/core';
import { Overrides } from '@material-ui/core/styles/overrides';
import { COLOR_GREY_1 } from '../colors';

export const getMuiLinkDefaultProps = (): LinkProps => ({
  underline: 'always',
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getMuiLinkOverride = (theme: Theme): Overrides['MuiLink'] => ({
  root: {
    cursor: 'pointer',
    color: COLOR_GREY_1,
    fontWeight: 'inherit',
    fontStyle: 'inherit',
  },
});
