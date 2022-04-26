import { TContractAddress, TProvider } from '../actions';

export type TMintTokenModalMintAction = TProvider & TContractAddress & {
  accountAddress: string;
  mintAmount: string;
  freezeUntilTimestamp: number;
};
