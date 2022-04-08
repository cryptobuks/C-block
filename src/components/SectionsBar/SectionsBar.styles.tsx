import { makeStyles } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => createStyles({
  circle: {
    transform: 'rotate(-90deg)',
    transformOrigin: 'center',
    transition: 'stroke-dasharray 1s ease-out, stroke-dashoffset 1s ease-out',
  },
}));
