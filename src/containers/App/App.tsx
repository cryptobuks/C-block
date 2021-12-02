import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';
import { BreakpointsProvider } from 'hooks/useBreakpoints';
import theme from 'theme';
import { Layout, Routes } from 'containers';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BreakpointsProvider>
        <StylesProvider>
          <CssBaseline />
          <Layout>
            <Routes />
          </Layout>
        </StylesProvider>
      </BreakpointsProvider>
    </ThemeProvider>
  );
}

export default App;
