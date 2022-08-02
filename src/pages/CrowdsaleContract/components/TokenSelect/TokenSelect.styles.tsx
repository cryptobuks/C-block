import { makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import { COLOR_BLACK_3 } from 'theme/colors';
import { flexHelper } from 'utils';

export const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    [theme.breakpoints.down('sm')]: {},
  },
  search: {
    width: 257,
    marginBottom: theme.spacing(3),
  },
  listSubheader: {
    padding: theme.spacing(0, 3),
    position: 'relative',
  },
  listItem: {
    margin: theme.spacing(0, 3),
    paddingBottom: theme.spacing(2),
    borderBottom: `1px solid ${COLOR_BLACK_3}`,
    width: '100%',
    ...flexHelper('flex-start'),
  },
  tokenIcon: {
    width: 32,
    height: 32,
    marginRight: theme.spacing(2.5),
  },
  listItemSelected: {
    '& *': {
      border: 'none',
      paddingBottom: 0,
    },
    '& img': {
      marginRight: theme.spacing(1),
    },
  },
}));
