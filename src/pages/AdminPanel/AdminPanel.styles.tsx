import { makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import {
  COLOR_BLACK_1,
  COLOR_BLACK_3, COLOR_BLACK_5, COLOR_GREY, COLOR_GREY_2, COLOR_GREY_3,
} from 'theme/colors';
import { FontWeights } from 'theme/Typography';
import { getFormatMedia } from 'theme/utils';
import { flexHelper } from 'utils';

export const useStyle = makeStyles((theme: Theme) => {
  const formatMedia = getFormatMedia(theme);
  return createStyles({
    addressLabel: {
      marginBottom: theme.spacing(4),
    },
    checkBox: {
      marginBottom: theme.spacing(6.25),
      marginRight: 0,
      [formatMedia.BREAKPOINT_TABLET]: {
        marginRight: theme.spacing(9),
      },
    },
    tabsContainer: {
      ...flexHelper('flex-start'),
      whiteSpace: 'nowrap',
      overflow: 'auto',
      '&::-webkit-scrollbar': {
        display: 'none',
      },

      '& > *': {
        '&:not(:last-child)': {
          marginRight: theme.spacing(2),
        },
      },
    },
    contractsLabel: {
      marginBottom: theme.spacing(3),
    },
    fieldContainer: {
      marginBottom: theme.spacing(6.25),
    },
    fieldContainerLargeIconPadding: {
      marginRight: theme.spacing(3),
    },
    cardsContainer: {
      marginTop: theme.spacing(3.875),
    },
    tabButton: {
      height: 44,
      width: '100%',
      fontSize: '20px !important',
      lineHeight: '32px !important',
      fontWeight: FontWeights.fontWeightMedium,
      '&:not(:last-child)': {
        marginRight: theme.spacing(3),
      },
    },
    tabButtonNotActive: {
      backgroundColor: theme.palette.type === 'dark' ? COLOR_BLACK_3 : COLOR_GREY_2,
      color: theme.palette.type === 'dark' ? COLOR_GREY : COLOR_BLACK_5,
      '& svg': {
        fill: theme.palette.type === 'dark' ? COLOR_GREY : COLOR_BLACK_5,
      },
      '&:hover svg': {
        fill: COLOR_BLACK_5,
      },
    },

    collapseBox: {
      padding: '32px 0',
    },
    collapseContentTitle: {
      color: theme.palette.type === 'dark' ? COLOR_BLACK_1 : COLOR_GREY_3,
    },
    rowText: {
      fontSize: '14px',
      lineHeight: '24px',
    },

    radioBox: {
      background: COLOR_BLACK_1,
      border: `1px solid ${COLOR_BLACK_3}`,
      borderRadius: '12px',
      maxWidth: 228,
      marginLeft: 0,
      padding: '10px 20px',
      marginBottom: theme.spacing(4),

      [formatMedia.BREAKPOINT_DESKTOP]: {
        marginLeft: 'auto',
      },
    },
  });
});
