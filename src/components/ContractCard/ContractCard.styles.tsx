import { makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import { COLOR_ACID_GREEN } from 'theme/colors';

export const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    cursor: 'pointer',
    padding: theme.spacing(3),
    background: theme.palette.primary.light,
    borderRadius: theme.spacing(2),
    border: `1px solid ${theme.palette.primary.light}`,
    minHeight: 260,
    '&:hover': {
      border: `1px solid ${COLOR_ACID_GREEN}`,
    },

  },
  cardHead: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(3),
  },
}));
