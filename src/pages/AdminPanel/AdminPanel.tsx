/* eslint-disable */

import React, {
  useCallback,
  useEffect, useMemo, useState,
} from 'react';
import { useDispatch } from 'react-redux';
import Web3 from 'web3';
import {
  Container,
  Grid,
  Button,
  Typography,
  Box, FormControlLabel, Radio, RadioGroup,
} from '@material-ui/core';
import clsx from 'clsx';

import userActions, { getUserData } from 'store/user/auth/actions';
import userSelectors from 'store/user/selectors';
import contractFormsSelector from 'store/contractForms/selectors';
import adminActions, {checkIsAdmin} from 'store/admin/actions';
import adminActionTypes from 'store/admin/actionTypes';
import adminSelector from 'store/admin/selectors';
import uiSelectors from 'store/ui/selectors';
import ratesSelectors from 'store/rates/selectors';

import { useShallowSelector, useWeb3Provider } from 'hooks';

import {
  ChangePriceCard, CheckBox, EditableField,
} from 'components';
import { PeopleIcon, SuccessIcon } from 'theme/icons';

import {
  contractsHelper, getTokenAmountDisplay, setNotification,
} from 'utils';
import { FactoryContracts, TDeployContractCreationMethodNames, Tokens } from 'types/utils/contractsHelper';
import { getContractsMinCreationPrice } from 'store/contractForms/actions';
import { Modals, RequestStatus } from 'types';
import { setActiveModal } from 'store/modals/reducer';
import { getRates } from 'store/rates/actions';
import { toggleTestnet } from 'store/user/reducer';
import { useWalletConnectorContext } from 'services';
import { UsersView } from './components/UsersView';
import {
  AdminTabs, contractsMock, getContracts, tabs,
} from './AdminPanel.helpers';
import { useStyle } from './AdminPanel.styles';

export const AdminPanel = () => {
  const dispatch = useDispatch();
  const { connect } = useWalletConnectorContext();
  const { getDefaultProvider } = useWeb3Provider();
  const [isPaymentsReceiverFieldEdit, setIsPaymentsReceiverFieldEdit] = useState(false);
  const [selectedContractType, setSelectedContractType] = useState<FactoryContracts>(
    contractsMock[0],
  );
  const [selectedTab, setSelectedTab] = useState<AdminTabs>(tabs[0]);

  const { paymentsReceiverAddress: defaultPaymentsReceiverAddress, isMainnetDisabled } = useShallowSelector(
    adminSelector.selectState,
  );
  const handleIsAllowedDeployToMainnet = () => {
    dispatch(
      adminActions.setIsMainnetDisabled({
        isMainnetDisabled: !isMainnetDisabled,
      }),
    );
  };

  const [paymentsReceiverAddress, setPaymentsReceiverAddress] = useState(
    defaultPaymentsReceiverAddress,
  );
  const {
    isMainnet, permissions, countryCodes, wallet,
  } = useShallowSelector(
    userSelectors.getUser,
  );

  const handleGetUsers = useCallback(() => {
    if (selectedTab === 'Users') {
      dispatch(
        adminActions.getUsers(),
      );
    }
  }, [dispatch, selectedTab]);
  const handleGetContractsMinCreationPrice = useCallback(() => {
    dispatch(
      getContractsMinCreationPrice({
        provider: getDefaultProvider(),
      }),
    );
  }, [dispatch, getDefaultProvider]);
  const handleGetRates = useCallback(() => {
    dispatch(
      getRates(),
    );
  }, [dispatch]);
  const handleGetCountryCodes = useCallback(() => {
    if (!permissions.viewUsers) return;
    if (!countryCodes.length) {
      dispatch(
        userActions.getCountryCodes(),
      );
    }
  }, [countryCodes.length, dispatch, permissions.viewUsers]);

  const [radioState, setRadioState] = useState(isMainnet ? 'mainnet' : 'testnet');

  const radioHandler = useCallback(async (event) => {
    setRadioState(event.target.value);
    dispatch(toggleTestnet());
    await connect(wallet);
    handleGetUsers();
    // handleGetContractsMinCreationPrice();
    handleGetRates();
    handleGetCountryCodes();
    dispatch(getUserData({
      showErrorNotification: true,
    }));
    dispatch(checkIsAdmin({
      provider: getDefaultProvider(),
    }));
  }, [connect, dispatch, handleGetContractsMinCreationPrice, handleGetCountryCodes, handleGetRates, handleGetUsers, wallet]);

  const celoDecimals = useMemo(
    () => contractsHelper.getTokensDecimals('celo', isMainnet),
    [isMainnet],
  );
  const cusdDecimals = useMemo(
    () => contractsHelper.getTokensDecimals('cusd', isMainnet),
    [isMainnet],
  );
  const rates = useShallowSelector(ratesSelectors.selectRates);
  const handleChangePaymentsReceiverAddress = (fieldValue: string | number) => {
    setPaymentsReceiverAddress(fieldValue.toString());
  };
  const handleSavePaymentsReceiverAddress = (fieldValue: string | number) => {
    setIsPaymentsReceiverFieldEdit(!isPaymentsReceiverFieldEdit);

    // trigger only if saved & not allowed to edit
    if (isPaymentsReceiverFieldEdit) {
      if (fieldValue.toString().toLowerCase() === defaultPaymentsReceiverAddress.toLowerCase()) {
        // nothing changed -> return;
        return;
      }
      const isValidEthAddress = Web3.utils.isAddress(fieldValue.toString());

      if (!isValidEthAddress) {
        setNotification({
          type: 'error',
          message: 'Incorrect payments receiver address format',
        });
        setPaymentsReceiverAddress(defaultPaymentsReceiverAddress);
        return;
      }

      dispatch(
        adminActions.setPaymentsReceiver({
          provider: getDefaultProvider(),
          paymentsReceiverAddress: fieldValue.toString(),
        }),
      );
    }
  };

  const handleSavePrice = (
    deployContractName: TDeployContractCreationMethodNames,
  ) => (
    fieldValue: string | number,
    isEditMode: boolean,
    tokenName: Tokens,
  ) => {
    // trigger only if saved & not allowed to edit
    if (isEditMode) return;
    dispatch(
      adminActions.setPrice({
        provider: getDefaultProvider(),
        contractType: selectedContractType,
        deployContractName,
        price: fieldValue.toString(),
        tokenName,
      }),
    );
  };

  useEffect(() => {
    setPaymentsReceiverAddress(
      defaultPaymentsReceiverAddress,
    );
  }, [defaultPaymentsReceiverAddress]);

  useEffect(() => {
    handleGetUsers();
  }, [handleGetUsers]);
  useEffect(() => {
    handleGetContractsMinCreationPrice();
  }, [handleGetContractsMinCreationPrice]);
  useEffect(() => {
    handleGetRates();
  }, [handleGetRates]);
  useEffect(() => {
    handleGetCountryCodes();
  }, [handleGetCountryCodes]);

  const adminCheckIsAdminRequestStatus = useShallowSelector(
    uiSelectors.getProp(adminActionTypes.ADMIN_CHECK_IS_ADMIN),
  );

  useEffect(() => {
    dispatch(setActiveModal({
      activeModal: Modals.FullscreenLoader,
      open: true,
    }));
  }, [dispatch]);

  useEffect(() => {
    if (adminCheckIsAdminRequestStatus === RequestStatus.SUCCESS) {
      dispatch(setActiveModal({
        activeModal: Modals.Init,
        open: false,
      }));
    }
  }, [adminCheckIsAdminRequestStatus, dispatch]);

  const contractForms = useShallowSelector(contractFormsSelector.getContractForms);
  const classes = useStyle();

  if (adminCheckIsAdminRequestStatus === RequestStatus.REQUEST) {
    return null;
  }

  return (
    <Container>
      <Grid container justifyContent="space-between">
        <Grid item xs={12} sm={12} md={9} lg={7} xl={7}>
          {
              permissions.changeNetworkMode && (
                <CheckBox
                  className={classes.checkBox}
                  name="Allow users to deploy contracts to mainnet"
                  value={!isMainnetDisabled}
                  label="Allow users to deploy contracts to mainnet"
                  onClick={handleIsAllowedDeployToMainnet}
                />
              )
          }
          {
            permissions.setFeeReceiver && (
              <>
                <Typography variant="h3" className={classes.addressLabel}>
                  Manage payments` receiving address
                </Typography>
                <EditableField
                  className={classes.fieldContainer}
                  otherClasses={{
                    textField: classes.fieldContainerLargeIconPadding,
                  }}
                  InputProps={{
                    endAdornment: <SuccessIcon style={{ marginLeft: 6 }} />,
                  }}
                  value={paymentsReceiverAddress}
                  disabled={!isPaymentsReceiverFieldEdit}
                  onClick={handleSavePaymentsReceiverAddress}
                  onChange={handleChangePaymentsReceiverAddress}
                />
              </>
            )
          }
          {
            selectedTab !== 'Users' && (
            <Typography variant="h3" className={classes.contractsLabel}>
              Set prices for contracts creation
            </Typography>
            )
          }
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={5} xl={5}>
          <Box className={classes.radioBox}>
            <RadioGroup
              value={radioState}
              onChange={radioHandler}
            >
              <FormControlLabel
                classes={{
                  label: clsx(classes.label, classes.labelRed),
                }}
                value="testnet"
                control={(
                  <Radio
                    checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                    icon={<span className={classes.icon} />}
                  />
                )}
                label="Alfajores testnet"
              />
              <FormControlLabel
                classes={{
                  label: classes.label,
                }}
                value="mainnet"
                control={(
                  <Radio
                    checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                    icon={<span className={classes.icon} />}
                  />
                )}
                label="Mainnet"
              />
            </RadioGroup>
          </Box>
        </Grid>
      </Grid>
      <Box className={classes.tabsContainer}>
        {
          tabs.filter((title) => {
            if (title === 'Users' && permissions.viewUsers) {
              return true;
            }
            if (title !== 'Users' && permissions.setPrice) {
              return true;
            }
            return false;
          }).map((title) => (
            <Box key={title}>
              <Button
                className={clsx(classes.tabButton, {
                  [classes.tabButtonNotActive]: title !== selectedTab,
                }, 'border-radius-s')}
                size="small"
                variant="contained"
                onClick={() => {
                  setSelectedTab(title);
                  // @ts-expect-error
                  const isContractType = contractsMock.includes(title);
                  if (isContractType) {
                    // @ts-expect-error
                    setSelectedContractType(title);
                  }
                }}
              >
                {title === 'Users' && <PeopleIcon style={{ marginRight: 8 }} />}
                {title}
              </Button>
            </Box>
          ))
        }
      </Box>

      {
        selectedTab === 'Users' && permissions.viewUsers && (
          <UsersView permissions={permissions} />
        )
      }
      {
        selectedTab !== 'Users' && permissions.setPrice && (
          <Grid container className={classes.cardsContainer}>
            {
                getContracts(selectedContractType, contractForms).map(({
                  contractDeployName, contractDisplayName, price = [],
                }) => {
                  const [
                    rawCeloPrice,
                    rawCusdPrice,
                  ] = price;
                  const celoPrice = getTokenAmountDisplay(rawCeloPrice, celoDecimals);
                  const cusdPrice = getTokenAmountDisplay(rawCusdPrice, cusdDecimals);
                  const prices: Record<Tokens, string> = {
                    celo: celoPrice,
                    cusd: cusdPrice,
                  };
                  return (
                    <Grid
                      key={contractDeployName}
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      lg={6}
                      xl={6}
                    >
                      <ChangePriceCard
                        title={contractDisplayName}
                        prices={prices}
                        usdPerCelo={rates['celo']}
                        onClick={handleSavePrice(contractDeployName)}
                      />
                    </Grid>
                  );
                })
              }
          </Grid>
        )
      }
    </Container>
  );
};
