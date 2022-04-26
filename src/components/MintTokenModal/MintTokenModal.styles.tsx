import { makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';

import { flexHelper } from 'utils';

export const useStyles = makeStyles((theme: Theme) => createStyles({
  inputContainer: {
    ...flexHelper('space-between'),
    width: '100%',
    '&:not(:last-child)': {
      paddingBottom: theme.spacing(4),
    },
  },
  frozenUntilDate: {
    display: 'block',
  },
  freezeUntilTimestamp: {
    maxWidth: '40%',
  },
  desc: {
    maxWidth: '90%',
    marginBottom: theme.spacing(2),
  },
  modalTitle: {
    ...flexHelper('flex-start', 'flex-start'),
  },
  modalControls: {
    ...flexHelper('flex-start', 'center'),
    paddingTop: theme.spacing(4),
  },
  button: {
    minWidth: 100,
    maxWidth: 174,
    width: '100%',
    height: 55,
    fontSize: 18,
    textTransform: 'none',
  },
}));
