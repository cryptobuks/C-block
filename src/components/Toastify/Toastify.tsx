import React, { FC } from 'react';
import clsx from 'clsx';
import { Box, Typography } from '@material-ui/core';
import { useStyles } from './Toastify.styles';
import { toastifyHelper } from './Toastify.helper';

export type ToastifyProps = {
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
  className?: string;
};

export const Toastify:FC<ToastifyProps> = ({
  type,
  message,
  className,
}) => {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.toastify, classes[type], className)}>
      <Box className={classes.icon}>
        {toastifyHelper[type]}
      </Box>
      <Typography variant="body1">{message}</Typography>
    </Box>
  );
};
