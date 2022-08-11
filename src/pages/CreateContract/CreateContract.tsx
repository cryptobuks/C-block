import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  Box, Container, Grid, Switch, Typography,
} from '@material-ui/core';
import BigNumber from 'bignumber.js';

import { ContractCard } from 'components/ContractCard';
import { toggleTestnet } from 'store/user/reducer';
import { useShallowSelector, useWeb3Provider } from 'hooks';
import userSelector from 'store/user/selectors';
import {
  contractsHelper,
  formatNumber,
  getTokenAmountDisplay,
  // setNotification,
} from 'utils';
import contractFormsSelector from 'store/contractForms/selectors';
import adminSelector from 'store/admin/selectors';
import { getContractsMinCreationPrice } from 'store/contractForms/actions';
import { ContractFormsState, MinCreationPriceField } from 'types';
import { useWalletConnectorContext } from 'services';
import { createContractHelpers } from './CreateContract.helpers';
import { useStyles } from './CreateContract.styles';

export const CreateContract = () => {
  const { isMainnetDisabled } = useShallowSelector(
    adminSelector.selectState,
  );
  // const checkUserAuthenticated = useShallowSelector(
  //   userSelector.selectIsAuthenticated,
  // );

  const contractForms: ContractFormsState = useShallowSelector(
    contractFormsSelector.getContractForms,
  );
  const { isMainnet, wallet } = useShallowSelector(userSelector.getUser);
  const celoDecimals = useMemo(() => contractsHelper.getTokensDecimals('celo', isMainnet), [isMainnet]);
  const cusdDecimals = useMemo(() => contractsHelper.getTokensDecimals('cusd', isMainnet), [isMainnet]);
  const { getDefaultProvider } = useWeb3Provider();

  const minCreationPrices = useMemo(
    () => [
      contractForms.tokenContract.additional.minCreationPrice,
      contractForms.crowdsaleContract.additional.minCreationPrice,
      contractForms.lostKeyContract.additional.minCreationPrice,
      contractForms.willContract.additional.minCreationPrice,
      contractForms.weddingContract.additional.minCreationPrice,
    ].map((unformattedPrice, index) => {
      const ret: { isFixPrice: boolean } & MinCreationPriceField = {
        isFixPrice: index > 1,
        ...unformattedPrice,
      };

      if (unformattedPrice.celo !== '-') {
        const celo = new BigNumber(
          getTokenAmountDisplay(unformattedPrice.celo, celoDecimals),
        ).toFixed(3);
        ret.celo = formatNumber(+celo, ['en-US']);
      }

      if (unformattedPrice.cusd !== '-') {
        const cusd = new BigNumber(
          getTokenAmountDisplay(unformattedPrice.cusd, cusdDecimals),
        ).toFixed(2);
        ret.cusd = formatNumber(+cusd, ['en-US']);
      }

      return ret;
    }),
    [
      celoDecimals,
      cusdDecimals,
      contractForms.crowdsaleContract.additional.minCreationPrice,
      contractForms.lostKeyContract.additional.minCreationPrice,
      contractForms.tokenContract.additional.minCreationPrice,
      contractForms.weddingContract.additional.minCreationPrice,
      contractForms.willContract.additional.minCreationPrice,
    ],
  );

  const dispatch = useDispatch();
  const { connect } = useWalletConnectorContext();
  const handleTestnetChange = useCallback(() => {
    if (isMainnetDisabled) return;
    dispatch(toggleTestnet());
    // if (checkUserAuthenticated) {
    //   setNotification({
    //     type: 'info',
    //     message: 'You will be logged out. Log in once again',
    //   });
    // }
    connect(wallet);
  }, [connect, dispatch, isMainnetDisabled, wallet]);

  useEffect(() => {
    dispatch(
      getContractsMinCreationPrice({
        provider: getDefaultProvider(),
      }),
    );
  }, [dispatch, getDefaultProvider]);

  const classes = useStyles();

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Box className={classes.testnetSwitcher}>
            <Typography>Test net</Typography>
            <Switch
              checked={!isMainnet}
              disabled={isMainnetDisabled}
              onClick={handleTestnetChange}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        {createContractHelpers.map((contractType, index) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            xl={4}
            key={contractType.title}
          >
            <NavLink style={{ width: '100%' }} to={contractType.link}>
              <ContractCard
                {...contractType}
                minCreationPrice={minCreationPrices[index]}
              />
            </NavLink>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
