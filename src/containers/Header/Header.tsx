import React, {
  useCallback, useState, VFC,
} from 'react';

import {
  Grid, Container, Typography, Box, IconButton,
} from '@material-ui/core';
import clsx from 'clsx';

import { useLocation } from 'react-router-dom';
import { Logo } from 'components/Logo';
import { Menu } from 'theme/icons';
import userSelector from 'store/user/selectors';
import { State, UserState } from 'types';
import { useShallowSelector } from 'hooks';
import { ConnectButton } from './components/ConnectButton';
import { useStyles } from './Header.styles';
import { ConnectDropdown } from './components/ConnectDropdown';

export interface HeaderProps {
  openSidebar: () => void,
  className?: string;
}

export const Header: VFC<HeaderProps> = ({ openSidebar, className }) => {
  const classes = useStyles();
  const location = useLocation();

  const { address } = useShallowSelector<State, UserState>(userSelector.getUser);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleModal = useCallback(() => {
    setModalOpen(!isModalOpen);
  }, [isModalOpen]);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const isContractCreatePage = location.pathname === '/';
  return (
    <Container className={clsx(classes.root, className)}>
      <Box className={classes.headerLogo}>
        <Logo />
        <IconButton color="primary" onClick={openSidebar}>
          <Menu />
        </IconButton>
      </Box>
      <Grid container className={classes.connectAndBreadcrumbs}>
        <Grid
          item
          sm={6}
          md={6}
          lg={8}
          xl={8}
          className={clsx(classes.headerContent, classes.title)}
        >
          {isContractCreatePage ? (
            <Typography align="left" className="acidGreen" variant="h2">Choose contract</Typography>
          ) : 'Breadcrumbs'}
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4} className={classes.headerContent}>
          <ConnectButton
            handleModal={handleModal}
            address={address}
          />
        </Grid>
      </Grid>
      <ConnectDropdown
        address={address}
        open={isModalOpen}
        onClose={closeModal}
      />
    </Container>
  );
};
