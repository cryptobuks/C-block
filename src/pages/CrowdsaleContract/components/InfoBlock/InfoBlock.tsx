import React, { FC } from 'react';
import {
  Typography,
  Box,
  // Grid,
} from '@material-ui/core';
import { InfoCircleIcon } from 'theme/icons';
import clsx from 'clsx';
import { useStyles } from './InfoBlock.styles';

interface IInfoBlockProps {
  className?: string;
  title?: string;
}

export const InfoBlock: FC<IInfoBlockProps> = ({
  className, title = 'Please note!', children,
}) => {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.root, className)}>
      <Box className={classes.title}>
        {/* <Box> */}
        <InfoCircleIcon />
        <Typography className={classes.titleText} variant="body1">{title}</Typography>
        {/* </Box> */}
        {/* {!isFirst && (
          <Box className={classes.deleteIcon} onClick={deleteForm}>
            <TrashIcon />
          </Box>
        )} */}
      </Box>
      <Box>
        {children}
      </Box>
      {/* <Grid container>
        {children}
      </Grid> */}
    </Box>
  );
};
