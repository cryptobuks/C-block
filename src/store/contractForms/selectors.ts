import type { ContractFormsState, State } from 'types';

export default {
  getContractForms: (state: State): ContractFormsState => state.contractForms,
};
