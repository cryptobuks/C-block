import { makeStyles } from '@material-ui/core';
import { COLOR_ACID_GREEN, COLOR_ERROR, COLOR_GREEN } from 'theme/colors';
import { flexHelper } from 'utils';

export const useStyles = makeStyles({
  icon: {
    borderRadius: '50%',
    width: 24,
    height: 24,
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    'input:hover ~ &': {
      borderColor: COLOR_ACID_GREEN,
    },
  },
  checkedIcon: {
    backgroundColor: COLOR_ACID_GREEN,
    ...flexHelper('center', 'center'),
    '&:before': {
      display: 'block',
      width: 12,
      height: 12,
      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
      background: COLOR_GREEN,
      borderRadius: '50%',
      content: '""',
    },
  },
  label: {
    fontSize: '14px',
    lineHeight: '20px',
  },
  labelRed: {
    color: COLOR_ERROR,
  },
});
