import React, { VFC } from 'react';

import {
  Box, Switch, Typography,
} from '@material-ui/core';
import clsx from 'clsx';

import { MoonIcon } from 'theme/icons';
import { useStyles } from './ThemeToggler.styles';

export interface ThemeTogglerProps {
  className?: string;
}

export const ThemeToggler: VFC<ThemeTogglerProps> = ({ className }) => {
  const classes = useStyles();
  return (
    <Box className={clsx(className, classes.root)}>
      <MoonIcon />
      <Typography>Dark Mode</Typography>
      <Switch />
    </Box>
  );
};
