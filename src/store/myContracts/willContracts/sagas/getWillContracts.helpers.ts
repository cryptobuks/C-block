import {
  IGetContractsWillContractWithContractCreationField,
  IGetContractsWillContractWithSpecificField,
} from 'pages/MyContracts/MyContracts.types';
import { ISpecificLostKeyContractData } from 'types';

export const transformMergeWillContractsAndSpecificData = (
  lastwills: IGetContractsWillContractWithContractCreationField[],
  lastwillsSpecificData: ISpecificLostKeyContractData[],
) => lastwills.map((will, index) => {
  const specificData = lastwillsSpecificData[index];
  return {
    ...will,
    specificContractData: {
      addresses: [],
      ...specificData,
    },
  };
}) as IGetContractsWillContractWithSpecificField[];
