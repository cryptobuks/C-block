import { makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import { COLOR_BLACK_2 } from 'theme/colors';

export const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    background: COLOR_BLACK_2,
    boxSizing: 'border-box',
    borderRadius: '12px',
    padding: theme.spacing(2),
  },
}));
