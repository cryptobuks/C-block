import { makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import { COLOR_BLACK_4 } from 'theme/colors';

import { getFormatMedia } from 'theme/utils';
import { flexHelper } from 'utils';

export const useStyles = makeStyles((theme: Theme) => {
  const formatMedia = getFormatMedia(theme);

  return createStyles({
    root: {
      [formatMedia.BREAKPOINT_TABLET]: {
      },
    },
    toastify: {
      ...flexHelper('flex-start', 'flex-start'),
      border: `1px solid ${COLOR_BLACK_4}`,
      background: theme.palette.secondary.light,
      minWidth: 320,
      maxWidth: 450,
      minHeight: 56,
      borderRadius: theme.spacing(1.5),
      padding: theme.spacing(2),
      paddingRight: theme.spacing(6),
    },
    icon: {
      marginRight: theme.spacing(3),
    },
  });
});
