/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContractFormsState } from 'types';
import { ICrowdsaleContract, TokenContract } from 'types/store/contractForms';
import { formattedDate } from 'utils';

export const dynamicFormDataTemplate = {
  address: '',
  name: '',
  amount: '',
  isFrozen: false,
  frozenUntilDate: formattedDate(),
};

export const crowdsaleContractDynamicFormInitialData = {
  address: '',
  rate: '',
};

const initialState: ContractFormsState = {
  tokenContract: {
    tokenName: '',
    tokenOwner: '',
    tokenSymbol: '',
    decimals: '',
    futureMinting: false,
    burnable: false,
    freezable: false,
    tokens: [dynamicFormDataTemplate],
  },
  crowdsaleContract: {
    contractName: '',
    tokenAddress: '',
    crowdsaleOwner: '',
    softcapTokens: '',
    saleDuration: '',
    changingDates: false,
    tokens: [crowdsaleContractDynamicFormInitialData],
  },
};

export const contractFormReducer = createSlice({
  name: 'contractForm',
  initialState,
  reducers: {
    setTokenContractForm: (state, action: PayloadAction<TokenContract>) => ({
      ...state,
      tokenContract: action.payload,
    }),
    setCrowdsaleContractForm: (state, action: PayloadAction<ICrowdsaleContract>) => ({
      ...state,
      crowdsaleContract: action.payload,
    }),
  },
});

export const {
  setTokenContractForm,
  setCrowdsaleContractForm,
} = contractFormReducer.actions;

export default contractFormReducer.reducer;
