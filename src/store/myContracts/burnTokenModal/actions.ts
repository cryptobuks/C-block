import { createAction } from '@reduxjs/toolkit';

import {
  TBurnTokenModalBurnAction,
} from 'types';

import actionTypes from './actionTypes';

export const burnTokenModalBurn = createAction<TBurnTokenModalBurnAction>(
  actionTypes.BURN_TOKEN_MODAL_BURN,
);

export default {
  burnTokenModalBurn,
};
