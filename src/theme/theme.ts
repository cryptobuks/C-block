import { createTheme } from '@material-ui/core';
import { getMuiButton, getMuiButtonDefaultProps } from './Button';
import { COLOR_BLACK, COLOR_ERROR } from './colors';

import { getMuiContainer, getMuiContainerDefaultProps } from './Container';
import { getMuiCssBaseline, getMuiCssBaselineDefaultProps } from './CssBaseline';
import { getMuiDialogDefaultProps, getMuiDialogProps } from './Dialog';
import { getMuiGrid, breakpointOptions, getMuiGridDefaultProps } from './Grid';
import { getMuiIconButton } from './IconButton';
import { getMuiLinkDefaultProps, getMuiLinkOverride } from './Link';
import { getMuiSwitch, getMuiSwitchDefaultProps } from './Switch/Switch.theme';
import { getTypographyOptions } from './Typography';

// eslint-disable-next-line import/no-mutable-exports
export let theme = createTheme({
  palette: {
    error: {
      main: COLOR_ERROR,
    },
    primary: {
      main: COLOR_BLACK,
    },
  },
  typography: getTypographyOptions,
  breakpoints: breakpointOptions,
  spacing: 8,
});

theme = createTheme(theme, {
  props: {
    MuiCssBaseline: getMuiCssBaselineDefaultProps(),
    MuiLink: getMuiLinkDefaultProps(),
    MuiButtonBase: { disableRipple: true },
    MuiContainer: getMuiContainerDefaultProps(),
    MuiGrid: getMuiGridDefaultProps(),
    MuiTypography: getTypographyOptions(),
    MuiButton: getMuiButtonDefaultProps(),
    MuiSwitch: getMuiSwitchDefaultProps(),
    MuiDialog: getMuiDialogDefaultProps(),
  },
  overrides: {
    MuiCssBaseline: getMuiCssBaseline(theme),
    MuiLink: getMuiLinkOverride(theme),
    MuiContainer: getMuiContainer(theme),
    MuiGrid: getMuiGrid(theme),
    MuiButton: getMuiButton(theme),
    MuiIconButton: getMuiIconButton(theme),
    MuiSwitch: getMuiSwitch(theme),
    MuiDialog: getMuiDialogProps(theme),
  },
});
