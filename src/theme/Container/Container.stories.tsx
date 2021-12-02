import React from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';

import * as colors from 'theme/colors';

export default {
  title: 'theme/Container',
  component: Container,
};

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: colors.COLOR_GREY,
  },
  box: {
    height: 350,
    backgroundColor: colors.COLOR_GREY_1,
  },
}));

export const Default: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Box className={classes.box} />
    </Container>
  );
};
