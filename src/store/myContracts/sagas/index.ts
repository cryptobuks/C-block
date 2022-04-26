import { fork } from 'redux-saga/effects';

import getMyContractsSaga from './getMyContracts';
import weddingContractsSaga from '../weddingContracts/sagas';
import setUpModalSaga from '../setUpModal/sagas';
import confirmActiveStatusModalSaga from '../confirmActiveStatusModal/sagas';
import burnTokenModalSaga from '../burnTokenModal/sagas';
import mintTokenModalSaga from '../mintTokenModal/sagas';

export default function* myContractsSaga() {
  yield fork(getMyContractsSaga);

  yield fork(weddingContractsSaga);
  yield fork(setUpModalSaga);
  yield fork(confirmActiveStatusModalSaga);
  yield fork(burnTokenModalSaga);
  yield fork(mintTokenModalSaga);
}
