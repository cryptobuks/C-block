import React, { FC } from 'react';

import { Box, IconButton, Typography } from '@material-ui/core';
import clsx from 'clsx';

import { useStyles } from './Preview.styles';
import { iconHelper } from './Preview.helpers';

export interface PreviewProps {
  type: 'token';
  name: string;
  className?: string;
}

export const Preview: FC<PreviewProps> = ({
  name, type, children, className,
}) => {
  const classes = useStyles();
  return (
    <>
      <Box className={clsx(classes.content, className)}>
        <Box className={classes.title}>
          <IconButton>{iconHelper[type]}</IconButton>
          <Typography variant="h3">{name}</Typography>
        </Box>
        {children}
        <Box className={classes.stamp} />
      </Box>
      <Box className={classes.controls}>Controls</Box>
    </>
  );
};
