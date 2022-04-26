import { fork } from 'redux-saga/effects';

import burnTokenModalBurnSaga from './burn';

export default function* burnTokenModal() {
  yield fork(burnTokenModalBurnSaga);
}
