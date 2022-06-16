import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import apiActions from 'store/ui/actions';
import { authApi } from 'store/api/apiRequestBuilder';
import { setNotification } from 'utils';
import { confirmResetPassword } from '../actions';
import actionTypes from '../actionTypes';

function* confirmResetPasswordSaga({
  type,
  payload: {
    password,
    uid,
    token,
  },
}: ReturnType<typeof confirmResetPassword>) {
  try {
    yield put(apiActions.request(type));

    const response: AxiosResponse = yield call(
      authApi.confirmResetPassword,
      {
        new_password1: password,
        new_password2: password,
        uid,
        token,
      },
    );
    if (response.status < 200 || response.status >= 300) {
      throw new Error('Backend thrown response with status code not equal to 2xx');
    }

    setNotification({
      type: 'success',
      message: 'Password has been reset with the new password.',
    });

    yield put(apiActions.success(type));
  } catch (err) {
    console.log(err, err.response);

    // backend error
    if (err?.response?.data) {
    /**
     * make errors from backend like
     * @example {"uid":["Invalid value"]}
     * to be
     * @example '"Invalid value" error in "uid"'
     */
      // @ts-expect-error: garanteed that error is in exact this form
      const axiosRequestError = Object.values(err?.response?.data).map((value) => `${value?.join('\n')}`).join('\n');
      setNotification({
        type: 'error',
        message: `Error occurred while resetting password. ${axiosRequestError}`,
      }, {
        autoClose: 12000,
      });
    }

    yield put(apiActions.error(type, err));
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.USER_AUTH_CONFIRM_RESET_PASSWORD, confirmResetPasswordSaga);
}
