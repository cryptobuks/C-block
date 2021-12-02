import { makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import { COLOR_ACID_GREEN, COLOR_BLACK_1, COLOR_BLACK_2 } from 'theme/colors';

export const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    cursor: 'pointer',
    padding: theme.spacing(3),
    background: COLOR_BLACK_1,
    borderRadius: theme.spacing(2),
    border: `1px solid ${COLOR_BLACK_2}`,
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
