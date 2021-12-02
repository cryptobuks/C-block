import React, { VFC } from 'react';

import { Box, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { LogoIcon } from 'assets/img';
import { useStyles } from '.';

export interface LogoProps {
  className?: string;
}

export const Logo: VFC<LogoProps> = ({ className }) => {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.root, className)}>
      <img src={LogoIcon} alt="" />
      <Typography className={classes.subLogo}>Platform</Typography>
    </Box>
  );
};
