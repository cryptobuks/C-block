import React, {
  FC, useState, useCallback, useMemo, useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  Link,
} from '@material-ui/core';
import clsx from 'clsx';

import {
  Copyable,
} from 'components';
import { Edit, TrashIcon } from 'theme/icons';
import { useWeb3Provider, useShallowSelector } from 'hooks';
import actionTypes from 'store/contractForms/actionTypes';
import contractFormsSelector from 'store/contractForms/selectors';
import userSelector from 'store/user/selectors';
import uiSelector from 'store/ui/selectors';
import apiActions from 'store/ui/actions';
import { RequestStatus } from 'types';
import { getContractCreationPrice } from 'store/contractForms/actions';
import { constructExplorerUrl, contractsHelper, getTokenAmountDisplay } from 'utils';
import { COMPLETE_MODAL_CONTRACT_CREATION_SUCCESS_TEXT } from 'appConstants';
import { FullscreenLoader } from '../FullscreenLoader';
import { CompleteModal } from '../CompleteModal';
import { DisclaimerModal } from '../DisclaimerModal';
import { PaymentModal } from '../PaymentModal';
import { iconHelper, IconType } from './Preview.helpers';
import { useStyles } from './Preview.styles';

export interface PreviewProps {
  className?: string;
  type: IconType;
  address: string;
  name: string;
  launchAction: () => void;
  editAction: () => void;
  deleteAction: () => void;
  isReadonly?: boolean;
}

export const Preview: FC<PreviewProps> = ({
  isReadonly = false,
  launchAction,
  editAction,
  deleteAction,
  name,
  address,
  type,
  children,
  className,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getDefaultProvider } = useWeb3Provider();
  const { isMainnet } = useShallowSelector(userSelector.getUser);
  const [isDisclaimerOpen, setDisclaimerOpen] = useState(false);
  const [isPaymentOpen, setPaymentOpen] = useState(false);
  const [resultModalState, setResultModalState] = useState({
    open: false,
    result: false,
  });

  const openDisclaimerModal = useCallback(() => {
    setDisclaimerOpen(true);
  }, []);
  const closeDisclaimerModal = useCallback(() => {
    setDisclaimerOpen(false);
  }, []);

  const openPaymentModal = useCallback(async () => {
    dispatch(
      getContractCreationPrice({
        provider: getDefaultProvider(),
        contractType: type,
      }),
    );
    closeDisclaimerModal();
    setPaymentOpen(true);
  }, [closeDisclaimerModal, dispatch, getDefaultProvider, type]);
  const closePaymentModal = useCallback(() => {
    dispatch(apiActions.reset(actionTypes.GET_CONTRACT_CREATION_PRICE));
    setPaymentOpen(false);
  }, [dispatch]);

  const handleBack = useCallback(() => {
    navigate(-1);
  }, []);

  const onPay = useCallback(async () => {
    await launchAction();
    closePaymentModal();
  }, [closePaymentModal, launchAction]);

  const contractActionType = useMemo(() => {
    switch (type) {
      case 'token':
        return actionTypes.CREATE_TOKEN_CONTRACT;
      case 'lostkey':
        return actionTypes.CREATE_LOSTKEY_CONTRACT;
      case 'will':
        return actionTypes.CREATE_WILL_CONTRACT;
      case 'crowdsale':
        return actionTypes.CREATE_CROWDSALE_CONTRACT;
      case 'weddingRing':
        return actionTypes.CREATE_WEDDING_CONTRACT;
      default:
        return null;
    }
  }, [type]);
  const createContractRequestStatus = useShallowSelector(
    uiSelector.getProp(contractActionType),
  );
  const paymentModalRequestStatus = useShallowSelector(
    uiSelector.getProp(actionTypes.GET_CONTRACT_CREATION_PRICE),
  );
  const isLoader = useMemo(
    () => createContractRequestStatus === RequestStatus.REQUEST ||
      paymentModalRequestStatus === RequestStatus.REQUEST,
    [createContractRequestStatus, paymentModalRequestStatus],
  );

  const closeResultModal = useCallback(() => {
    setResultModalState({
      ...resultModalState,
      open: false,
    });
    dispatch(apiActions.reset(contractActionType));
  }, [contractActionType, dispatch, resultModalState]);

  const contractForms = useShallowSelector(
    contractFormsSelector.getContractForms,
  );
  const celoDecimals = useMemo(
    () => contractsHelper.getChainNativeCurrency(isMainnet).decimals,
    [isMainnet],
  );
  const paymentModalAmount = useMemo(() => {
    let ret: string;
    switch (type) {
      case 'token': {
        ret = contractForms.tokenContract.additional.contractCreationPrice;
        break;
      }
      case 'lostkey': {
        ret = contractForms.lostKeyContract.additional.contractCreationPrice;
        break;
      }
      case 'will': {
        ret = contractForms.willContract.additional.contractCreationPrice;
        break;
      }
      case 'crowdsale': {
        ret = contractForms.crowdsaleContract.additional.contractCreationPrice;
        break;
      }
      case 'weddingRing': {
        ret = contractForms.weddingContract.additional.contractCreationPrice;
        break;
      }
      default:
        break;
    }
    return getTokenAmountDisplay(ret, celoDecimals);
  }, [
    celoDecimals,
    contractForms.lostKeyContract.additional.contractCreationPrice,
    contractForms.tokenContract.additional.contractCreationPrice,
    contractForms.willContract.additional.contractCreationPrice,
    contractForms.crowdsaleContract.additional.contractCreationPrice,
    contractForms.weddingContract.additional.contractCreationPrice,
    type,
  ]);
  const contractExplorerUrl = useMemo(() => constructExplorerUrl(address, isMainnet), [address, isMainnet]);

  useEffect(() => {
    switch (createContractRequestStatus) {
      case RequestStatus.SUCCESS: {
        setResultModalState({
          open: true,
          result: true,
        });
        break;
      }
      case RequestStatus.ERROR: {
        setResultModalState({
          open: true,
          result: false,
        });
        break;
      }
      default: {
        break;
      }
    }
  }, [createContractRequestStatus]);

  useEffect(() => {
    if (resultModalState.open && resultModalState.result) {
      setTimeout(() => {
        closeResultModal();
        deleteAction();
      }, 3000);
    }
  }, [closeResultModal, deleteAction, resultModalState.open, resultModalState.result]);

  return (
    <Container className={classes.root}>
      <Box className={clsx(classes.content, className)}>
        <Box className={classes.title}>
          <IconButton>{iconHelper[type]}</IconButton>
          <Typography className={classes.titleText} variant="h3">
            {name}
          </Typography>
        </Box>
        {
          address && (
            <Box className={classes.contractAddressBox}>
              <Typography
                className={clsx(classes.sectionTitle, 'l')}
                variant="body1"
              >
                Contract address
              </Typography>
              <Copyable
                className={classes.copyableContainer}
                onlyIconActive
                withBorder
                valueToCopy={contractExplorerUrl}
              >
                <Typography noWrap>
                  <Link
                    className={classes.contractExplorerUrl}
                    href={contractExplorerUrl}
                  >{address}
                  </Link>
                </Typography>
              </Copyable>
            </Box>
          )
        }
        {children}
        <Box className={classes.stamp} />
      </Box>
      <Box className={classes.controls}>
        {
          isReadonly ? (
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              className={classes.button}
              onClick={handleBack}
            >
              Back
            </Button>
          ) : (
            <>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                className={classes.button}
                onClick={openDisclaimerModal}
              >
                Launch
              </Button>
              <Box className={classes.editDeleteBtns}>
                <Button
                  variant="outlined"
                  size="large"
                  className={clsx(classes.button, classes.editDelete)}
                  endIcon={<Edit />}
                  onClick={editAction}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  className={clsx(classes.button, classes.editDelete)}
                  endIcon={<TrashIcon />}
                  onClick={deleteAction}
                >
                  Delete
                </Button>
              </Box>
            </>
          )
        }
      </Box>
      <DisclaimerModal
        open={isDisclaimerOpen}
        onClose={closeDisclaimerModal}
        onAccept={openPaymentModal}
      />
      <PaymentModal
        open={isPaymentOpen}
        onClose={closePaymentModal}
        onAccept={onPay}
        paymentAmount={paymentModalAmount}
      />
      {isLoader && <FullscreenLoader />}
      <CompleteModal
        open={resultModalState.open}
        result={resultModalState.result}
        onClose={closeResultModal}
        successText={COMPLETE_MODAL_CONTRACT_CREATION_SUCCESS_TEXT}
      />
    </Container>
  );
};
