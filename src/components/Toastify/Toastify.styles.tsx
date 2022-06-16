import { makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import {
  COLOR_ACID_GREEN, COLOR_BLACK_4, COLOR_ERROR, COLOR_YELLOW,
} from 'theme/colors';

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
      position: 'relative',
      ...flexHelper('flex-start', 'flex-start'),
      border: `1px solid ${COLOR_BLACK_4}`,
      background: theme.palette.secondary.light,
      maxWidth: 450,
      minHeight: 56,
      borderRadius: theme.spacing(1.5),
      padding: theme.spacing(2),
      paddingRight: theme.spacing(6),
      whiteSpace: 'pre-line',
    },
    closeBtnContainer: {
      position: 'absolute',
      right: theme.spacing(2),
    },
    icon: {
      marginRight: theme.spacing(3),
    },
    error: {
      border: `1px solid ${COLOR_ERROR}`,
    },
    warning: {
      border: `1px solid ${COLOR_YELLOW}`,
    },
    success: {
      border: `1px solid ${COLOR_ACID_GREEN}`,
    },

    texterror: {
      color: COLOR_ERROR,
    },
    textwarning: {
      color: COLOR_YELLOW,
    },
    textsuccess: {
      color: COLOR_ACID_GREEN,
    },

    iconerror: {
      '& > *': {
        '& > *': {
          fill: COLOR_ERROR,
        },
      },
    },
    iconwarning: {
      '& > *': {
        '& > *': {
          fill: COLOR_YELLOW,
        },
      },
    },
    iconsuccess: {
      '& > *': {
        '& > *': {
          fill: COLOR_ACID_GREEN,
        },
      },
    },
  });
});
