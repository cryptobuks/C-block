import { makeStyles, Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import {
  COLOR_BLACK_1, COLOR_BLACK_2, COLOR_BLACK_3, COLOR_GREY, COLOR_GREY_2, COLOR_GREY_4,
} from 'theme/colors';

import { flexHelper } from 'utils';

export const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    padding: theme.spacing(6.25, 8.75),
    background: theme.palette.type === 'dark' ? COLOR_BLACK_2 : COLOR_GREY_4,
    borderRadius: theme.spacing(1.5),
    border: `1px solid ${theme.palette.type === 'dark' ? COLOR_BLACK_3 : COLOR_GREY_2}`,

    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
  wrapper: {
    ...flexHelper('space-between', 'center'),
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  list: {
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
      paddingTop: theme.spacing(1.5),
    },
  },
  listItem: {
    ...flexHelper('flex-start', 'center'),
  },
  listItemPoint: {
    width: 8,
    height: 8,
    borderRadius: '50%',
  },
  listItemText: {
    marginLeft: theme.spacing(1),
    color: theme.palette.type === 'dark' ? COLOR_GREY : COLOR_BLACK_1,
    lineHeight: '30px',
  },
}));
