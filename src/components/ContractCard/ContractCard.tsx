import React, { ReactElement, VFC } from 'react';

import { Box, IconButton, Typography } from '@material-ui/core';
import clsx from 'clsx';

import { useStyles } from './ContractCard.styles';

export interface ContractCardProps {
  icon?: ReactElement,
  title?: string,
  text?: string,
  className?: string;
}

export const ContractCard: VFC<ContractCardProps> = ({
  icon, title, text, className,
}) => {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.root, className)}>
      <Box className={classes.cardHead}>
        <IconButton className={classes.icon}>{icon}</IconButton>
        <Typography variant="h3">{title}</Typography>
      </Box>
      {text}
    </Box>
  );
};
