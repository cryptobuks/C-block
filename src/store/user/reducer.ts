/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from 'types';

const initialState: UserState = {
  address: '',
  wallet: '',
  colorTheme: 'dark',
};

export const userReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    connectWalletState: (state, action: PayloadAction<UserState>) => ({
      ...state, ...action.payload,
    }),
    disconnectWalletState: (state) => {
      localStorage.removeItem('walletconnect');
      return {
        ...state,
        wallet: '',
        address: '',
      };
    },
  },
});

export const { connectWalletState, disconnectWalletState } = userReducer.actions;

export default userReducer.reducer;
