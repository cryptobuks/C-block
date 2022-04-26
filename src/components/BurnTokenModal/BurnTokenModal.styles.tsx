import { makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';

import { getFormatMedia } from 'theme/utils';
import { flexHelper } from 'utils';

export const useStyles = makeStyles((theme: Theme) => {
  const formatMedia = getFormatMedia(theme);

  return createStyles({
    root: {
      [formatMedia.BREAKPOINT_TABLET]: {},
    },
    inputContainer: {
      ...flexHelper('space-between'),
      width: '100%',
    },
    desc: {
      maxWidth: '90%',
      marginBottom: theme.spacing(2),
    },
    modalTitle: {
      ...flexHelper('flex-start', 'center'),
    },
    flameIcon: {
      width: '36px',
      height: '36px',
      marginLeft: theme.spacing(1),
    },
    modalControls: {
      ...flexHelper('flex-start', 'center'),
      marginTop: theme.spacing(1.25),
      paddingTop: theme.spacing(3),
    },
    button: {
      minWidth: 100,
      maxWidth: 174,
      width: '100%',
      height: 55,
      fontSize: 18,
      textTransform: 'none',
    },
  });
});
