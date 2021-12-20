export interface ICrowdsaleContractDynamicForm {
  address: string;
  rate: string;
}

export interface ICrowdsaleContract {
  contractName: string;
  tokenAddress: string;
  crowdsaleOwner: string;
  softcapTokens: string;
  saleDuration: string;
  changingDates: boolean;

  tokens: ICrowdsaleContractDynamicForm[];
}
