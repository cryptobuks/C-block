import { UrlObject } from 'url';

import React, { FC, useCallback, useState } from 'react';

import { Box } from '@material-ui/core';

import { Sidebar } from 'components/Sidebar';
import { Header } from 'containers';
import { useStyles } from './Layout.styles';

export interface LayoutProps {
  route?: UrlObject | string;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const classes = useStyles({ isSidebarOpen });
  const toggleSidebar = useCallback(() => {
    setSidebarOpen(!isSidebarOpen);
  }, [isSidebarOpen]);

  return (
    <>
      <Box className={classes.root}>
        <Sidebar className={classes.sidebar} closeSidebar={toggleSidebar} />
        <Box className={classes.content}>
          <Header openSidebar={toggleSidebar} />
          {children}
        </Box>
        <Box className={classes.greenBlob} />
      </Box>
    </>
  );
};
