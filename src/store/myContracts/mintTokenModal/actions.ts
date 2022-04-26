import { createAction } from '@reduxjs/toolkit';

import {
  TMintTokenModalMintAction,
} from 'types';

import actionTypes from './actionTypes';

export const mintTokenModalMint = createAction<TMintTokenModalMintAction>(
  actionTypes.MINT_TOKEN_MODAL_MINT,
);

export default {
  mintTokenModalMint,
};
