import { makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import { COLOR_BLACK_3 } from 'theme/colors';

export const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    [theme.breakpoints.down('sm')]: {},
  },
  search: {
    width: 257,
  },
  listSubheader: {
    padding: theme.spacing(0, 3),
  },
  listItem: {
    margin: theme.spacing(0, 3),
    paddingBottom: theme.spacing(2),
    borderBottom: `1px solid ${COLOR_BLACK_3}`,
    width: '100%',
  },
  listItemSelected: {
    '& *': {
      border: 'none',
      paddingBottom: 0,
    },
  },
}));
