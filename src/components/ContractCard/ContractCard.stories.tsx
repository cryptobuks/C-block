import React from 'react';

import { Container, Grid } from '@material-ui/core';

import { ContractCard } from './ContractCard';
import { contractCardPropsMocked } from './ContractCard.mock';

export default {
  title: 'components/ContractCard',
  component: ContractCard,
};

export const Default: React.FC = () => (
  <Container>
    <Grid container>
      <Grid item xs={12} sm={6} lg={4} md={4} xl={4}>
        <ContractCard
          {...contractCardPropsMocked}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4} md={4} xl={4}>
        <ContractCard
          {...contractCardPropsMocked}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4} md={4} xl={4}>
        <ContractCard
          {...contractCardPropsMocked}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4} md={4} xl={4}>
        <ContractCard
          {...contractCardPropsMocked}
        />
      </Grid>
    </Grid>
  </Container>
);
