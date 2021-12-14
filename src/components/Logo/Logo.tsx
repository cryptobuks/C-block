import React, { VFC } from 'react';

import { Typography } from '@material-ui/core';
import clsx from 'clsx';
import { LogoBlackIcon, LogoIcon } from 'assets/img';
import { Link } from 'react-router-dom';
import { routes } from 'appConstants';
import { useStyles } from '.';

export interface LogoProps {
  isLight?: boolean;
  className?: string;
}

export const Logo: VFC<LogoProps> = ({ isLight = false, className }) => {
  const classes = useStyles();
  return (
    <Link to={routes.root} className={clsx(classes.root, className)}>
      <img src={isLight ? LogoBlackIcon : LogoIcon} alt="" />
      <Typography variant="body1" className={classes.subLogo}>Platform</Typography>
    </Link>
  );
};
