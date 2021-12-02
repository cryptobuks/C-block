import React, { VFC } from 'react';

import { Box, IconButton, Typography } from '@material-ui/core';
import clsx from 'clsx';

import { shortenPhrase } from 'utils';
import { CopyIcon } from 'theme/icons';
import { useStyles } from './AddressButton.styles';

export interface AddressButtonProps {
  onClick: () => void;
  address: string;
  className?: string;
}

export const AddressButton: VFC<AddressButtonProps> = ({ onClick, address, className }) => {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.root, className)} onClick={onClick}>
      <Typography>{shortenPhrase(address)}</Typography>
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          return alert('COPY WILL DO LATER');
        }}
        className={classes.copyBtn}
        color="secondary"
      >
        <CopyIcon />
      </IconButton>
    </Box>
  );
};
