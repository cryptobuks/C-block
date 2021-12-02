import React from 'react';

import { capitalize, Theme, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    userSelect: 'none',
    display: 'inline-block',
    flexShrink: 0,
    transition: theme.transitions.create('fill', {
      duration: theme.transitions.duration.shorter,
    }),
  },
  /* Styles applied to the root element if `color="primary"`. */
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  /* Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {
    color: theme.palette.secondary.main,
  },
  /* Styles applied to the root element if `color="action"`. */
  colorAction: {
    color: theme.palette.action.active,
  },
  /* Styles applied to the root element if `color="error"`. */
  colorError: {
    color: theme.palette.error.main,
  },
  /* Styles applied to the root element if `color="disabled"`. */
  colorDisabled: {
    color: theme.palette.action.disabled,
  },
  /* Styles applied to the root element if 'color="success". */
  colorSuccess: {
    color: theme.palette.success.main,
  },
  /* Styles applied to the root element if 'color="warning". */
  colorWarning: {
    color: theme.palette.warning.main,
  },
  /* Styles applied to the root element if `fontSize="inherit"`. */
  fontSizeInherit: {
    fontSize: 'inherit',
  },
  /* Styles applied to the root element if `fontSize="small"`. */
  fontSizeSmall: {
    fontSize: theme.typography.pxToRem(20),
  },
  /* Styles applied to the root element if `fontSize="large"`. */
  fontSizeLarge: {
    fontSize: theme.typography.pxToRem(35),
  },
}));

export interface BaseSVGIconProps extends React.SVGProps<SVGSVGElement> {
  color?:
  | 'action'
  | 'disabled'
  | 'error'
  | 'warning'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success';
  htmlColor?: string;
  fontSize?: 'default' | 'inherit' | 'large' | 'small';
  viewBox?: string;
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
  className?: string;
}

export const BaseSVGIcon: React.FC<BaseSVGIconProps> = ({
  children,
  color = 'inherit',
  htmlColor,
  fontSize = 'default',
  viewBox = '0 0 24 24',
  width,
  height,
  fill,
  stroke,
  className,
  ...passedProps
}) => {
  const classes = useStyles();
  return (
    <svg
      {...passedProps}
      className={clsx(
        className,
        classes.root,
        {
          [classes[`color${capitalize(color)}`]]: color !== 'inherit',
          [classes[`fontSize${capitalize(fontSize)}`]]: fontSize !== 'default',
        },
      )}
      focusable="false"
      viewBox={viewBox}
      aria-hidden
      role={undefined}
      width={width}
      height={height}
      fill={fill}
      color={htmlColor}
      stroke={stroke}
    >
      {children}
    </svg>
  );
};
