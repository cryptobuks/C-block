import React, { VFC } from 'react';

import { Box, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { LogoBlackIcon, LogoIcon } from 'assets/img';
import { useStyles } from '.';

export interface LogoProps {
  isLight?: boolean;
  className?: string;
}

export const Logo: VFC<LogoProps> = ({ isLight = false, className }) => {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.root, className)}>
      <img src={isLight ? LogoBlackIcon : LogoIcon} alt="" />
      <Typography className={classes.subLogo}>Platform</Typography>
    </Box>
  );
};
