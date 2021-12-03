import React, { useCallback, VFC } from 'react';

import {
  Box, Switch, Typography,
} from '@material-ui/core';
import clsx from 'clsx';

import { MoonIcon, SunIcon } from 'theme/icons';
import { useDispatch } from 'react-redux';
import { toggleTheme } from 'store/user/reducer';
import { useShallowSelector } from 'hooks';
import { State, UserState } from 'types';
import userSelector from 'store/user/selectors';
import { useStyles } from './ThemeToggler.styles';

export interface ThemeTogglerProps {
  className?: string;
}

export const ThemeToggler: VFC<ThemeTogglerProps> = ({ className }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isLight } = useShallowSelector<State, UserState>(userSelector.getUser);

  const changeTheme = useCallback(() => {
    dispatch(toggleTheme());
  }, []);

  return (
    <Box className={clsx(className, classes.root)}>
      {!isLight ? <MoonIcon /> : <SunIcon />}
      <Typography>{`${isLight ? 'Light' : 'Dark'} Mode`}</Typography>
      <Switch onClick={changeTheme} />
    </Box>
  );
};
