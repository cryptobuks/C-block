import { makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import { COLOR_ACID_GREEN, COLOR_BLACK_3 } from 'theme/colors';

import { getFormatMedia } from 'theme/utils';
import { flexHelper } from 'utils';

export const useStyles = makeStyles((theme: Theme) => {
  const formatMedia = getFormatMedia(theme);

  return createStyles({
    root: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(2)}px ${theme.spacing(2)}px`,
      cursor: 'pointer',
      border: `1px solid ${COLOR_BLACK_3}`,
      boxSizing: 'border-box',
      borderRadius: theme.spacing(4),
      ...flexHelper('center'),
      '&:hover': {
        borderColor: COLOR_ACID_GREEN,
      },
      [formatMedia.BREAKPOINT_TABLET]: {
      },
    },
    copyBtn: {
      position: 'absolute',
      right: theme.spacing(3),
      zIndex: 9,
      '&:hover': {
        '& > *': {
          '& > *': {
            fill: COLOR_ACID_GREEN,
          },
        },
      },
    },
  });
});
