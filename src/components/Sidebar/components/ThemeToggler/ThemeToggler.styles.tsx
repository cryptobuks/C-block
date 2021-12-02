import { makeStyles } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => createStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}));
