import React, { VFC } from 'react';

import { Box, Link, Typography } from '@material-ui/core';
import clsx from 'clsx';

import { useStyles } from './Disclaimer.styles';

export interface DisclaimerProps {
  className?: string;
}

export const Disclaimer: VFC<DisclaimerProps> = ({ className }) => {
  const classes = useStyles();
  return (
    <Box className={clsx(className, classes.root)}>
      <Typography variant="body1" className="xs">By using the service, you accept the
        {' '}<Link href="/">Terms of Service</Link> | <Link href="/">Privacy Policy</Link>
      </Typography>
      <Typography>v1.0.0</Typography>
    </Box>
  );
};
