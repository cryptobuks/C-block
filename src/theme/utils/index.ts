import { Theme } from '@material-ui/core/styles';

// eslint-disable-next-line no-shadow
export enum FormatMedia {
  BREAKPOINT_TABLET = 'BREAKPOINT_TABLET',
  BREAKPOINT_DESKTOP = 'BREAKPOINT_DESKTOP',
  BREAKPOINT_WIDE_DESKTOP = 'BREAKPOINT_WIDE_DESKTOP',
}

export const getFormatMedia = (theme: Theme): Record<FormatMedia, string> => ({
  BREAKPOINT_TABLET: theme.breakpoints.up('sm'),
  BREAKPOINT_DESKTOP: theme.breakpoints.up('md'),
  BREAKPOINT_WIDE_DESKTOP: theme.breakpoints.up('xl'),
});
