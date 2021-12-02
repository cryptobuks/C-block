import React from 'react';
import {
  Box,
  Container, Grid, Switch, Typography,
} from '@material-ui/core';
import { ContractCard } from 'components/ContractCard';
import { createContractHelpers } from './CreateContract.helpers';
import { useStyles } from './CreateContract.styles';

export const CreateContract = () => {
  const classes = useStyles();

  return (
    <>
      {/* <Typography className="acidGreen" variant="h2">Choose contract</Typography> */}
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Box className={classes.testnetSwitcher}>
              <Typography>Test net</Typography>
              <Switch />
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          {createContractHelpers.map((contractType) => (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <ContractCard
                {...contractType}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
