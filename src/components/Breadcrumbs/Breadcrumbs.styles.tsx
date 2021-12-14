import { makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import {
  COLOR_ACID_GREEN, COLOR_BLACK_1, COLOR_BLACK_4, COLOR_BLACK_5,
  COLOR_GREY, COLOR_GREY_1, COLOR_GREY_5, COLOR_GREY_6,
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
    breadcrumbsContainer: {
      ...flexHelper('flex-start'),
    },
    breadcrumb: {
      ...flexHelper(),
    },
    breadcrumbBreaker: {
      width: 4,
      height: 4,
      background: theme.palette.type === 'dark' ? COLOR_GREY_1 : COLOR_BLACK_1,
      borderRadius: '50%',
      margin: `0px ${theme.spacing(1)}px`,
    },
    breadcrumbLabel: {
      color: theme.palette.type === 'dark' ? COLOR_GREY : COLOR_BLACK_5,
      '&:hover': {
        color: theme.palette.type === 'dark' ? COLOR_ACID_GREEN : COLOR_GREY_6,
      },
    },
    breadcrumbLabelFirst: {
      color: theme.palette.type === 'dark' ? COLOR_BLACK_4 : COLOR_GREY_5,
      '&:hover': {
        color: theme.palette.type === 'dark' ? COLOR_ACID_GREEN : COLOR_GREY_6,
      },
    },
  });
});
