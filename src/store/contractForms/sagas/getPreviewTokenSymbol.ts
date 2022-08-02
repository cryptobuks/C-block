import {
  call, put, takeLatest, select,
} from '@redux-saga/core/effects';

import contractFormsSelector from 'store/contractForms/selectors';
import apiActions from 'store/ui/actions';
import { getPreviewTokenSymbol } from 'store/contractForms/actions';
import actionTypes from 'store/contractForms/actionTypes';
import { getSymbolSaga } from 'store/erc20/sagas/getSymbol';
import erc20ActionTypes from 'store/erc20/actionTypes';
import { setCrowdsaleTokenSymbol } from '../reducer';

export function* getPreviewTokenSymbolSaga({
  type,
  payload: {
    provider,
    tokenAddress,
    tokenIndex,
  },
}: ReturnType<typeof getPreviewTokenSymbol>) {
  try {
    yield put(apiActions.request(type));

    const temporaryPaymentTokenSymbols: string[] = yield select(
      contractFormsSelector.getTemporaryTokenSymbols,
    );

    const tokenSymbol: string = yield call(getSymbolSaga, {
      type: erc20ActionTypes.GET_ERC20_SYMBOL,
      payload: {
        provider,
        tokenAddress,
      },
    });
    const tokenSymbolsArr = [...temporaryPaymentTokenSymbols];
    tokenSymbolsArr[tokenIndex] = tokenSymbol;

    yield put(
      setCrowdsaleTokenSymbol(tokenSymbolsArr),
    );
    yield put(apiActions.success(type));
  } catch (err) {
    console.log(err);
    yield put(apiActions.error(type, err));
  }
}

export default function* listener() {
  yield takeLatest(
    actionTypes.GET_PREVIEW_TOKEN_SYMBOLS, getPreviewTokenSymbolSaga,
  );
}
