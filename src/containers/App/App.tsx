import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';
import { BreakpointsProvider } from 'hooks/useBreakpoints';
import { theme, lightTheme } from 'theme';
import { Layout, Routes } from 'containers';
import { useShallowSelector } from 'hooks';
import userSelector from 'store/user/selectors';
import { State, UserState } from 'types';

function App() {
  const { isLight } = useShallowSelector<State, UserState>(userSelector.getUser);
  const selectedTheme = isLight ? lightTheme : theme;

  return (
    <ThemeProvider theme={selectedTheme}>
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
