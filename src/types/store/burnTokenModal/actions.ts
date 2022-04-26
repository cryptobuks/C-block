import { TContractAddress, TProvider } from '../actions';

export type TBurnTokenModalBurnAction = TProvider & TContractAddress & {
  burnAmount: string;
};
