import { Theme } from '@material-ui/core';
import { Overrides } from '@material-ui/core/styles/overrides';
import { ComponentsProps } from '@material-ui/core/styles/props';
// @ts-expect-error: no types for @fontssource/inter module
import InterFontFace from '@fontsource/inter';

import {
  COLOR_BLACK, COLOR_BLACK_8, COLOR_GREY_9, COLOR_SCROLL_DARK,
} from 'theme/colors';

export const getMuiCssBaseline = (theme: Theme): Overrides['MuiCssBaseline'] => ({
  '@global': {
    '@font-face': [InterFontFace],
    html: {
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
      boxSizing: 'border-box',
      background: COLOR_BLACK,
    },
    body: {
      overflowX: 'hidden',
      margin: theme.spacing(0),
      backgroundColor: theme.palette.type === 'dark' ? COLOR_BLACK_8 : COLOR_GREY_9,
    },
    '*::-webkit-scrollbar': {
      width: 6,
      height: 2,
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: COLOR_SCROLL_DARK,
      borderRadius: 100,
    },
  },
});

export const getMuiCssBaselineDefaultProps = (): ComponentsProps['MuiCssBaseline'] => ({});
