import { makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import {
  COLOR_BLACK_1, COLOR_BLACK_3, COLOR_BLACK_9, COLOR_GREY_4,
} from 'theme/colors';
import { flexHelper } from 'utils';

export const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    [theme.breakpoints.down('sm')]: {},
  },
  selectDropdownWrapper: {
    marginTop: theme.spacing(1),
    background: theme.palette.type === 'dark' ? COLOR_BLACK_1 : COLOR_GREY_4,
    border: `1px solid ${COLOR_BLACK_3}`,
    margin: 5,
    borderRadius: 12,
    overflow: 'hidden',
    padding: theme.spacing(3, 0),
    marginLeft: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(3),
    },
    maxHeight: 419,
    height: '100%',
    overflowY: 'scroll',
  },
  search: {
    width: 257,
    marginBottom: theme.spacing(3),
  },
  listSubheader: {
    padding: theme.spacing(0, 3),
    position: 'relative',
  },
  listItemWrapper: {
    paddingTop: theme.spacing(2),
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    '&$selected': {
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: COLOR_BLACK_9,
      },
    },
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
