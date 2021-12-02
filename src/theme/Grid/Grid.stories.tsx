import React from 'react';

import {
  Box, createStyles, Grid, makeStyles,
} from '@material-ui/core';

export default {
  title: 'theme/Grid',
};

const useStyles = makeStyles(() => createStyles({
  content: {
    height: 300,
    backgroundColor: '#00AFDB',
    opacity: 0.25,
  },
}));

export const Default: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={6}>
        <Box className={classes.content} />
      </Grid>
      <Grid item xs={3} sm={6}>
        <Box className={classes.content} />
      </Grid>
      <Grid item xs={3} sm={6}>
        <Box className={classes.content} />
      </Grid>
      <Grid item xs={3} sm={1}>
        <Box className={classes.content} />
      </Grid>
      <Grid item xs={3} sm={1}>
        <Box className={classes.content} />
      </Grid>
      <Grid item xs={3} sm={1}>
        <Box className={classes.content} />
      </Grid>
      <Grid item xs={3} sm={1}>
        <Box className={classes.content} />
      </Grid>
    </Grid>
  );
};
