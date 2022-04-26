import { fork } from 'redux-saga/effects';

import mintTokenModalBurnSaga from './mint';

export default function* mintTokenModal() {
  yield fork(mintTokenModalBurnSaga);
}
