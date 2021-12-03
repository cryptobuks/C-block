import { makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import { COLOR_ACID_GREEN } from 'theme/colors';

export const useStyles = makeStyles<Theme, { isSidebarOpen: boolean }>(
  (theme: Theme) => createStyles({
    root: {
      position: 'relative',
      zIndex: 2,
      width: '100%',
      display: 'flex',
      background: theme.palette.primary.contrastText,
      overflow: 'hidden',
    },
    sidebar: {
      zIndex: 999,
      minWidth: 250,
      maxWidth: 350,
      flexBasis: '25%',
      transition: '300ms',
      [theme.breakpoints.down(768)]: {
        position: 'absolute',
        left: ({ isSidebarOpen }) => (isSidebarOpen ? '0%' : '-150%'),
        maxWidth: 'unset',
        width: '100%',
      },
    },
    content: {
      flexBasis: '75%',
      [theme.breakpoints.down(768)]: {
        flexBasis: '100%',
      },
    },
    greenBlob: {
      zIndex: -1,
      position: 'absolute',
      width: 376,
      height: 376,
      background: COLOR_ACID_GREEN,
      right: -188,
      top: 'calc(100vh - 188px)',
      filter: 'blur(400px)',
    },
  }),
);
