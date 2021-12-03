/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from 'types';

const initialState: UserState = {
  address: '',
  wallet: '',
  isLight: false,
};

export const userReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleTheme: (state) => ({
      ...state,
      isLight: !state.isLight,
    }),
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

export const { connectWalletState, disconnectWalletState, toggleTheme } = userReducer.actions;

export default userReducer.reducer;
