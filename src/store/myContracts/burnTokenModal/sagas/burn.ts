import {
  call, put, select, takeLatest,
} from 'redux-saga/effects';

import userSelector from 'store/user/selectors';
import apiActions from 'store/ui/actions';
import { setActiveModal } from 'store/modals/reducer';

import { Modals } from 'types';
import { contractsHelper } from 'utils';
import actionTypes from '../actionTypes';
import { burnTokenModalBurn } from '../actions';

function* burnTokenModalBurnSaga({
  type,
  payload: {
    provider,
    contractAddress,
    burnAmount,
  },
}: ReturnType<typeof burnTokenModalBurn>) {
  try {
    yield put(apiActions.request(type));
    yield put(setActiveModal({
      activeModal: Modals.SendTxPending,
      open: true,
    }));

    const { address: userWalletAddress } = yield select(userSelector.getUser);
    const contract = contractsHelper.getErc20BurnableMintablePausableFreezableToken(
      provider,
      contractAddress,
    );

    yield call(
      contract.methods.burn(burnAmount).send,
      {
        from: userWalletAddress,
      },
    );

    yield put(setActiveModal({
      activeModal: Modals.SendTxSuccess,
      open: true,
    }));
    yield put(apiActions.success(type));
  } catch (err) {
    console.log(err);
    yield put(setActiveModal({
      activeModal: Modals.SendTxRejected,
      open: true,
    }));
    yield put(apiActions.error(type, err));
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.BURN_TOKEN_MODAL_BURN, burnTokenModalBurnSaga);
}
