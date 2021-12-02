import React, { FC } from 'react';

import {
  Box, Dialog, Typography, IconButton,
} from '@material-ui/core';
import clsx from 'clsx';

import { CloseIcon } from 'theme/icons';
import { useStyles } from './Modal.styles';

export interface ModalProps {
  title?: string;
  open: boolean;
  onClose: () => void,
  className?: string;
}

export const Modal: FC<ModalProps> = ({
  title, open, className, children, onClose,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      transitionDuration={{
        enter: 200,
        exit: 0,
      }}
      className={clsx(classes.root, className)}
      open={open}
      onClose={onClose}
    >
      <Box className={classes.modalTitle}>
        {title && <Typography variant="h3">{title}</Typography>}
        <IconButton color="secondary" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      {children}
    </Dialog>
  );
};
