import { makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import { COLOR_ACID_GREEN } from 'theme/colors';

export const useStyles = makeStyles<Theme, { isSelected: boolean }>((theme: Theme) => createStyles({
  tab: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 48,
    marginLeft: -theme.spacing(3),
    marginRight: -theme.spacing(3),
    paddingLeft: theme.spacing(3),
    background: ({ isSelected }) => (isSelected ? theme.palette.secondary.main : 'unset'),
    borderLeft: ({ isSelected }) => (isSelected ? `2px solid ${COLOR_ACID_GREEN}` : 'unset'),
    '& > *': {
      color: ({ isSelected }) => (isSelected ? COLOR_ACID_GREEN : 'unset'),
      '& > *': {
        fill: ({ isSelected }) => (isSelected ? COLOR_ACID_GREEN : theme.palette.primary.dark),
      },
    },
    '&:hover': {
      borderLeft: `2px solid ${COLOR_ACID_GREEN}`,
      '& > *': {
        color: COLOR_ACID_GREEN,
        '& > *': {
          fill: COLOR_ACID_GREEN,
        },
      },
    },
  },
  iconWrapper: {
    marginLeft: theme.spacing(1),
    '& > *': {
      width: 20,
      height: 20,
      marginTop: 8,
    },
  },
  tabLabel: {
    fontSize: '14px',
  },
}));
