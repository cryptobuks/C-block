import React, { FC } from 'react';
import clsx from 'clsx';
import { Box, Typography } from '@material-ui/core';
import { CloseIcon } from 'theme/icons';
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
      <Typography className={classes[`text${type}`]} variant="body1">{message}</Typography>
      <Box className={clsx(classes.closeBtnContainer, classes[`icon${type}`])}>
        <CloseIcon />
      </Box>
    </Box>
  );
};
