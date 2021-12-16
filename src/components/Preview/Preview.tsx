import React, { FC } from 'react';

import {
  Box, Button, Container, IconButton, Typography,
} from '@material-ui/core';
import clsx from 'clsx';

import { PersonIcon, TrashIcon } from 'theme/icons';
import { useStyles } from './Preview.styles';
import { iconHelper } from './Preview.helpers';

export interface PreviewProps {
  launchAction: () => void,
  editAction: () => void,
  deleteAction: () => void,
  type: 'token';
  name: string;
  className?: string;
}

export const Preview: FC<PreviewProps> = ({
  launchAction,
  editAction,
  deleteAction,
  name,
  type,
  children,
  className,
}) => {
  const classes = useStyles();
  return (
    <Container>
      <Box className={clsx(classes.content, className)}>
        <Box className={classes.title}>
          <IconButton>{iconHelper[type]}</IconButton>
          <Typography className={classes.titleText} variant="h3">{name}</Typography>
        </Box>
        {children}
        <Box className={classes.stamp} />
      </Box>
      <Box className={classes.controls}>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          className={classes.button}
          onClick={launchAction}
        >
          Launch
        </Button>
        <Box className={classes.editDeleteBtns}>
          <Button
            variant="outlined"
            size="large"
            className={clsx(classes.button, classes.editDelete)}
            endIcon={<PersonIcon />}
            onClick={editAction}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            size="large"
            className={clsx(classes.button, classes.editDelete)}
            endIcon={<TrashIcon />}
            onClick={deleteAction}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
