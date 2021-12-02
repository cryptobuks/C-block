import { makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import { COLOR_BLACK_2 } from 'theme/colors';

export const useStyles = makeStyles((theme: Theme) => createStyles({
  testnetSwitcher: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: COLOR_BLACK_2,
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1.5),
    height: theme.spacing(7),
    marginBottom: theme.spacing(3),
  },
}));
