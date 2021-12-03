import { Theme } from '@material-ui/core';
import { Overrides } from '@material-ui/core/styles/overrides';
import { ComponentsProps } from '@material-ui/core/styles/props';
import { CSSProperties } from '@material-ui/styles';

import {
  COLOR_AKZ,
  COLOR_ACID_GREEN,
  COLOR_BLACK,
  COLOR_WHITE,
  COLOR_BLACK_1,
  COLOR_BLACK_3,
  COLOR_BLACK_4,
} from 'theme/colors';
import { FontWeights } from 'theme/Typography';

export const getMuiButton = (theme: Theme): Overrides['MuiButton'] => {
  const outlinedCommon: CSSProperties = {
    color: COLOR_WHITE,
    borderRadius: 100,
    border: `1px solid ${COLOR_ACID_GREEN}`,
    backgroundColor: theme.palette.primary.light,
    transition: '200ms',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    ...theme.typography.body2,

    '& $startIcon': {
      '& > *': {
        fill: COLOR_ACID_GREEN,
      },
    },
    '&$sizeLarge': {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
      ...theme.typography.button,
    },
    '&$sizeSmall': {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(1),
      paddingTop: theme.spacing(1),
      fontSize: '12px',
      lineHeight: '14px',
      fontWeight: FontWeights.fontWeightBold,
    },
    '&:hover': {
      color: COLOR_BLACK,
      background: COLOR_AKZ,
      '& $startIcon': {
        '& > *': {
          fill: COLOR_BLACK_3,
        },
      },
    },
    '&:active': {
      color: COLOR_BLACK,
      background: COLOR_ACID_GREEN,
      '& $startIcon': {
        '& > *': {
          fill: COLOR_BLACK_3,
        },
      },
    },
    '&$disabled': {
      opacity: 0.5,
      borderWidth: 0,
      color: `${COLOR_BLACK_4} !important`,
      background: COLOR_BLACK_1,
      '& $startIcon': {
        '& > *': {
          fill: COLOR_BLACK_3,
        },
      },
    },
  };

  return {
    outlined: {
      ...outlinedCommon,
      ...theme.typography.body2,
    },
    outlinedPrimary: outlinedCommon,
    outlinedSecondary: outlinedCommon,

    startIcon: {
      marginRight: theme.spacing(1.5),
      marginLeft: 0,
    },
    endIcon: {
      marginLeft: theme.spacing(1.5),
      marginRight: 0,
    },
  };
};

export const getMuiButtonDefaultProps = (): ComponentsProps['MuiButton'] => ({
  disableElevation: true,
  disableFocusRipple: true,
  disableRipple: true,
});
