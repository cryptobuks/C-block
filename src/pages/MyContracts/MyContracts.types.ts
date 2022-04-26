import {
  IGetContractsCrowdsaleContract,
  IGetContractsLostKeyContract,
  IGetContractsTokenContract,
  IGetContractsWeddingContract,
  IGetContractsWillContract,
} from 'store/api/apiRequestBuilder.types';
import {
  TChainType,
  TMyContracts, TSpecificContractData,
} from 'types';

export type TContractButtonsTypes =
| 'viewContract'
| 'mintToken'
| 'burnToken'
| 'setUp'
| 'requestDivorce'
| 'divorceApprove'
| 'divorceReject'
| 'requestWithdrawal'
| 'withdrawalApprove'
| 'withdrawalReject'
| 'getFunds'
| 'confirmLiveStatus'
| 'confirmActiveStatus';

export type TAdditionalContentRenderType =
| 'weddingRequestDivorce'
| 'weddingRequestWithdrawal'
| 'weddingSuccessfulDivorce'
| 'weddingSuccessfulWithdrawal';

export interface IContractButton {
  type: TContractButtonsTypes;
  title: string;
  altGroup?: boolean;
}

export type TContractButtons = IContractButton[];
export type TContractType =
| 'Crowdsale contract'
| 'Token contract'
| 'Lostkey contract'
| 'Will contract'
| 'Wedding contract';

export interface IContractCreationField {
  contractCreationData?: TMyContracts;
}

export interface ISpecificContractData {
  specificContractData: TSpecificContractData;
}
export interface IContractsCard extends IContractCreationField, ISpecificContractData {
  contractKey?: string;
  address: string;
  contractDate: string;
  isTestnet: boolean;
  contractType: TContractType;
  contractName: string;
  contractButtons: TContractButtons;
  additionalContentRenderType?: TAdditionalContentRenderType;
}

export interface ICreatedAtField {
  createdAt: string | number;
}

export interface IGetContractsTokenContractWithCreatedAtField
  extends IGetContractsTokenContract,
  ICreatedAtField {}
export interface IGetContractsLostKeyContractWithCreatedAtField
  extends IGetContractsLostKeyContract,
  ICreatedAtField {}
export interface IGetContractsWillContractWithCreatedAtField
  extends IGetContractsWillContract,
  ICreatedAtField {}
export interface IGetContractsCrowdsaleContractWithCreatedAtField
  extends IGetContractsCrowdsaleContract,
  ICreatedAtField {}
export interface IGetContractsWeddingContractWithCreatedAtField
  extends IGetContractsWeddingContract,
  ICreatedAtField {}
export interface IGetContractsWithCreatedAtField {
  tokens: IGetContractsTokenContractWithCreatedAtField[];
  lostkeys: IGetContractsLostKeyContractWithCreatedAtField[];
  lastwills: IGetContractsWillContractWithCreatedAtField[];
  crowdsales: IGetContractsCrowdsaleContractWithCreatedAtField[];
  weddings: IGetContractsWeddingContractWithCreatedAtField[];
}
export type TGetContractsWithCreatedAtField = {
  [chainType in TChainType]: IGetContractsWithCreatedAtField;
};
export type TAllGetContractsWithCreatedAtField =
& IGetContractsTokenContractWithCreatedAtField
& IGetContractsLostKeyContractWithCreatedAtField
& IGetContractsWillContractWithCreatedAtField
& IGetContractsCrowdsaleContractWithCreatedAtField
& IGetContractsWeddingContractWithCreatedAtField;

export interface IGetContractsTokenContractWithContractCreationField
  extends IGetContractsTokenContractWithCreatedAtField,
  IContractCreationField {}
export interface IGetContractsLostKeyContractWithContractCreationField
  extends IGetContractsLostKeyContractWithCreatedAtField,
  IContractCreationField {}
export interface IGetContractsWillContractWithContractCreationField
  extends IGetContractsWillContractWithCreatedAtField,
  IContractCreationField {}
export interface IGetContractsCrowdsaleContractWithContractCreationField
  extends IGetContractsCrowdsaleContractWithCreatedAtField,
  IContractCreationField {}
export interface IGetContractsWeddingContractWithContractCreationField
  extends IGetContractsWeddingContractWithCreatedAtField,
  IContractCreationField {}

export interface IGetContractsWithContractCreationField {
  tokens: IGetContractsTokenContractWithContractCreationField[];
  lostkeys: IGetContractsLostKeyContractWithContractCreationField[];
  lastwills: IGetContractsWillContractWithContractCreationField[];
  crowdsales: IGetContractsCrowdsaleContractWithContractCreationField[];
  weddings: IGetContractsWeddingContractWithContractCreationField[];
}
// With Specific ISpecificContractData
export interface IGetContractsTokenContractWithSpecificField
  extends IGetContractsTokenContractWithContractCreationField,
  ISpecificContractData {}
export interface IGetContractsLostKeyContractWithSpecificField
  extends IGetContractsLostKeyContractWithContractCreationField,
  ISpecificContractData {}
export interface IGetContractsWillContractWithSpecificField
  extends IGetContractsWillContractWithContractCreationField,
  ISpecificContractData {}
export interface IGetContractsCrowdsaleContractWithSpecificField
  extends IGetContractsCrowdsaleContractWithContractCreationField,
  ISpecificContractData {}
export interface IGetContractsWeddingContractWithSpecificField
  extends IGetContractsWeddingContractWithContractCreationField,
  ISpecificContractData {}

export interface IGetContractsWithSpecificField {
  tokens: IGetContractsTokenContractWithSpecificField[];
  lostkeys: IGetContractsLostKeyContractWithSpecificField[];
  lastwills: IGetContractsWillContractWithSpecificField[];
  crowdsales: IGetContractsCrowdsaleContractWithSpecificField[];
  weddings: IGetContractsWeddingContractWithSpecificField[];
}
