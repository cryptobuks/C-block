import { makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import {
  COLOR_ACID_GREEN, COLOR_BLACK, COLOR_BLACK_1, COLOR_BLACK_2, COLOR_BLACK_3,
} from 'theme/colors';
import { flexHelper } from 'utils';

export const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    minHeight: 100,
    width: '100%',
    ...flexHelper(),
    [theme.breakpoints.down(768)]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingTop: theme.spacing(4),
    },
  },
  headerContent: {
    ...flexHelper('flex-start'),
  },
  title: {
    alignSelf: 'center',
    [theme.breakpoints.down(768)]: {
      alignSelf: 'flex-start',
    },
  },
  connectAndBreadcrumbs: {
    [theme.breakpoints.down(768)]: {
      flexDirection: 'column-reverse',
      marginBottom: theme.spacing(4),
    },
  },
  headerLogo: {
    display: 'none',
    [theme.breakpoints.down(768)]: {
      ...flexHelper('space-between'),
      width: '100%',
      paddingBottom: theme.spacing(4),
      borderBottom: `1px solid ${COLOR_BLACK_3}`,
      marginBottom: theme.spacing(4),
    },
  },
  burger: {
    cursor: 'pointer',
    width: 48,
    height: 48,
    borderRadius: '50%',
    background: COLOR_BLACK_1,
    border: `1px solid ${COLOR_BLACK_3}`,
    ...flexHelper(),
    '&:hover': {
      background: COLOR_BLACK_2,
    },
    '&:active': {
      background: COLOR_BLACK,
    },
    '& > *': {
      fill: COLOR_ACID_GREEN,
    },
  },
}));
