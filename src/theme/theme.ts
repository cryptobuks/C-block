import { createTheme, Theme, ThemeOptions } from '@material-ui/core';
import { getMuiButton, getMuiButtonDefaultProps } from './Button';
import {
  COLOR_ACID_GREEN,
  COLOR_BLACK,
  COLOR_BLACK_1,
  COLOR_BLACK_2,
  COLOR_BLACK_4,
  COLOR_ERROR,
  COLOR_GREEN,
  COLOR_GREY_1,
  COLOR_GREY_2,
  COLOR_GREY_3,
  COLOR_GREY_4,
  COLOR_GREY_5,
} from './colors';

import { getMuiContainer, getMuiContainerDefaultProps } from './Container';
import { getMuiCssBaseline, getMuiCssBaselineDefaultProps } from './CssBaseline';
import { getMuiDialogDefaultProps, getMuiDialogProps } from './Dialog';
import { getMuiGrid, breakpointOptions, getMuiGridDefaultProps } from './Grid';
import { getMuiIconButton } from './IconButton';
import { getMuiLinkDefaultProps, getMuiLinkOverride } from './Link';
import { getMuiSwitch, getMuiSwitchDefaultProps } from './Switch/Switch.theme';
import {
  getMuiFormHelperText,
  getMuiInputBase,
  getMuiInputLabel,
  getMuiInputLabelDefaultProps,
  getMuiOutlinedInput,
  getMuiTextField,
  getMuiTextFieldDefaultProps,
} from './TextField';
import { getTypographyOptions } from './Typography';
import { getMuiSlider, getMuiSliderDefaultProps } from './Slider/Slider.theme';
import { getMuiTablePagination, getMuiTablePaginationDefaultProps } from './TablePagination/TablePagination.theme';
import { getMuiTableCell, getMuiTableCellDefaultProps } from './TableCell/TableCell.theme';
import {
  getMuiMenu,
  getMuiPaper,
  getMuiMenuItem,
  getMuiListItem,
  getMuiSelect,
} from './Select';

const getBaseTheme = (theme: Theme): ThemeOptions => ({
  props: {
    MuiCssBaseline: getMuiCssBaselineDefaultProps(),
    MuiLink: getMuiLinkDefaultProps(),
    MuiButtonBase: { disableRipple: true },
    MuiContainer: getMuiContainerDefaultProps(),
    MuiGrid: getMuiGridDefaultProps(),
    // @ts-expect-error probably incorrect type inferring
    MuiTypography: getTypographyOptions({ color: COLOR_GREY_1 }),
    MuiButton: getMuiButtonDefaultProps(),
    MuiSwitch: getMuiSwitchDefaultProps(),
    MuiDialog: getMuiDialogDefaultProps(),
    MuiInputLabel: getMuiInputLabelDefaultProps(),
    MuiTextField: getMuiTextFieldDefaultProps(),
    MuiSlider: getMuiSliderDefaultProps(),
    MuiTableCell: getMuiTableCellDefaultProps(),
    MuiTablePagination: getMuiTablePaginationDefaultProps(),
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
    MuiInputBase: getMuiInputBase(theme),
    MuiOutlinedInput: getMuiOutlinedInput(theme),
    MuiInputLabel: getMuiInputLabel(theme),
    MuiTextField: getMuiTextField(theme),
    MuiFormHelperText: getMuiFormHelperText(),
    MuiSlider: getMuiSlider(theme),
    MuiTableCell: getMuiTableCell(theme),
    MuiTablePagination: getMuiTablePagination(),
    MuiSelect: getMuiSelect(),
    MuiMenu: getMuiMenu(theme),
    MuiPaper: getMuiPaper(),
    MuiMenuItem: getMuiMenuItem(),
    MuiListItem: getMuiListItem(),
  },
});

// eslint-disable-next-line import/no-mutable-exports
export let darkTheme = createTheme({
  palette: {
    type: 'dark',
    error: {
      main: COLOR_ERROR,
    },
    primary: {
      main: COLOR_BLACK_1,
      dark: COLOR_GREY_1,
      light: COLOR_BLACK_1,
      contrastText: COLOR_BLACK,
    },
    secondary: {
      main: COLOR_GREEN,
      dark: COLOR_ACID_GREEN,
      light: COLOR_BLACK_2,
    },
    text: {
      secondary: COLOR_BLACK_4,
      hint: COLOR_BLACK_4,
    },
  },
  typography: getTypographyOptions({ color: COLOR_GREY_1 }),
  breakpoints: breakpointOptions,
  spacing: 8,
  transitions: {
    duration: {
      standard: 300,
    },
  },
});

darkTheme = createTheme(darkTheme, getBaseTheme(darkTheme));
// eslint-disable-next-line import/no-mutable-exports
export let lightTheme = createTheme({
  palette: {
    type: 'light',
    error: {
      main: COLOR_ERROR,
    },
    primary: {
      main: COLOR_GREY_3,
      dark: COLOR_BLACK_1,
      light: COLOR_GREY_2,
      contrastText: COLOR_GREY_4,
    },
    secondary: {
      main: COLOR_GREY_5,
      dark: COLOR_BLACK,
      light: COLOR_GREY_4,
    },
    text: {
      secondary: COLOR_BLACK,
      hint: COLOR_GREY_5,
    },
  },
  typography: getTypographyOptions({ color: COLOR_BLACK_1 }),
  breakpoints: breakpointOptions,
  spacing: 8,
  transitions: {
    duration: {
      standard: 300,
    },
  },
});

lightTheme = createTheme(lightTheme, getBaseTheme(lightTheme));
