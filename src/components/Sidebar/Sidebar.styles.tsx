import { makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import { COLOR_BLACK_1 } from 'theme/colors';
import { flexHelper } from 'utils';

export const useStyles = makeStyles((theme: Theme) => {
  const marginBottom = {
    marginBottom: theme.spacing(3),
  };

  return createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexDirection: 'column',
      height: '100vh',
      padding: theme.spacing(3),
      background: COLOR_BLACK_1,
    },
    contentWrapper: {
      width: '100%',
    },
    sidebarHead: {
      ...flexHelper('space-between'),
      marginTop: theme.spacing(1),
      ...marginBottom,
    },
    sidebarDisclaimer: {
      ...marginBottom,
    },
    sidebarCloseBtn: {
      display: 'none',
      [theme.breakpoints.down(768)]: {
        display: 'block',
      },
    },
  });
});
