import React from 'react';

import {
  ContractToken as ContractTokenIcon,
  CrowdsaleIcon,
  KeyIcon,
  WeddingRingIcon,
  WillContract,
} from 'theme/icons';
import {
  ISpecificLostKeyContractData, ISpecificWeddingContractData, ISpecificWillContractData, TMyContracts, TSpecificContractData,
} from 'types';
import { formattedDate } from 'utils';
import {
  DivorceStatusesEnum, getDivorceStatus, getWithdrawalStatus, WithdrawalStatusesEnum,
} from './hooks/useMyWeddingContract.helpers';
import {
  IContractButton, IContractsCard, IGetContractsCrowdsaleContractWithSpecificField, IGetContractsLostKeyContractWithSpecificField, IGetContractsTokenContractWithSpecificField, IGetContractsWeddingContractWithSpecificField, IGetContractsWillContractWithSpecificField, IGetContractsWithSpecificField, TAdditionalContentRenderType, TContractButtons, TContractButtonsTypes, TContractType,
} from './MyContracts.types';

export const contractButtonsHelper: Partial<
Record<TContractButtonsTypes, IContractButton>
> = {
  viewContract: {
    type: 'viewContract',
    title: 'View contract',
  },
  setUp: {
    type: 'setUp',
    title: 'Set up',
  },
  confirmActiveStatus: {
    type: 'confirmActiveStatus',
    title: 'Confirm active status',
  },
  confirmLiveStatus: {
    type: 'confirmLiveStatus',
    title: 'Confirm live status',
  },
  requestWithdrawal: {
    type: 'requestWithdrawal',
    title: 'Request withdrawal',
  },
  requestDivorce: {
    type: 'requestDivorce',
    title: 'Request divorce',
  },
  getFunds: {
    type: 'getFunds',
    title: 'Get funds',
  },
};

export const isFoundContractKey = (
  card: IContractsCard,
  contractKeyToBeFound: string,
) => card.contractKey === contractKeyToBeFound;

export const isFoundContract = (
  card: IContractsCard,
  contractAddress: string,
) => card.address.toLowerCase() === contractAddress.toLowerCase();

const createContractCard = (
  contractName: string,
  address: string,
  isTestnet: boolean,
  createdAt: string | number,
  contractCreationData: TMyContracts,
  specificContractData: TSpecificContractData,
) => ({
  contractName,
  address,
  contractDate: formattedDate('.', new Date(+createdAt * 1000)),
  isTestnet,
  contractCreationData,
  specificContractData,
});

const createCrowdsaleCard = ({
  name,
  address,
  is_testnet,
  createdAt,
  contractCreationData,
  specificContractData,
}: IGetContractsCrowdsaleContractWithSpecificField) => ({
  ...createContractCard(
    name,
    address,
    is_testnet,
    createdAt,
    contractCreationData,
    specificContractData,
  ),
  contractType: 'Crowdsale contract',
  contractButtons: [contractButtonsHelper.viewContract],
} as IContractsCard);

const createTokenCard = ({
  name,
  address,
  is_testnet,
  createdAt,
  contractCreationData,
  specificContractData,
}: IGetContractsTokenContractWithSpecificField) => ({
  ...createContractCard(
    name, address, is_testnet, createdAt, contractCreationData, specificContractData,
  ),
  contractType: 'Token contract',
  contractButtons: [contractButtonsHelper.viewContract],
} as IContractsCard);

const createLostkeyCard = ({
  name,
  address,
  is_testnet,
  createdAt,
  contractCreationData,
  specificContractData,
}: IGetContractsLostKeyContractWithSpecificField) => {
  const { isLostKey, terminated } = specificContractData as ISpecificLostKeyContractData;
  const contractButtons = [contractButtonsHelper.viewContract];
  if (!isLostKey && !terminated) {
    contractButtons.push(contractButtonsHelper.setUp);
    contractButtons.push(contractButtonsHelper.confirmActiveStatus);
  }
  return {
    ...createContractCard(
      name, address, is_testnet, createdAt, contractCreationData, specificContractData,
    ),
    contractType: 'Lostkey contract',
    contractButtons,
  } as IContractsCard;
};

const createWillCard = ({
  name,
  address,
  is_testnet,
  createdAt,
  contractCreationData,
  specificContractData,
}: IGetContractsWillContractWithSpecificField) => {
  const { isLostKey, terminated } = specificContractData as ISpecificWillContractData;
  const contractButtons = [contractButtonsHelper.viewContract];
  if (!isLostKey && !terminated) {
    contractButtons.push(contractButtonsHelper.setUp);
    contractButtons.push(contractButtonsHelper.confirmLiveStatus);
  }
  return {
    ...createContractCard(
      name, address, is_testnet, createdAt, contractCreationData, specificContractData,
    ),
    contractType: 'Will contract',
    contractButtons,
  } as IContractsCard;
};

const createWeddingCard = ({
  name,
  address,
  is_testnet,
  createdAt,
  contractCreationData,
  specificContractData,
}: IGetContractsWeddingContractWithSpecificField) => {
  const {
    activeWithdrawalProposal,
    withdrawalProposalPending,
  } = specificContractData as ISpecificWeddingContractData;
  const withdrawalStatus = getWithdrawalStatus(
    withdrawalProposalPending, activeWithdrawalProposal,
  );

  const { divorceTimestamp } = specificContractData as ISpecificWeddingContractData;
  const divorceStatus = getDivorceStatus(+divorceTimestamp);

  const contractButtons: TContractButtons = [contractButtonsHelper.viewContract];
  if (divorceStatus === DivorceStatusesEnum.DIVORCE_NOT_STARTED &&
    withdrawalStatus === WithdrawalStatusesEnum.WITHDRAWAL_NOT_STARTED) {
    contractButtons.push(contractButtonsHelper.requestWithdrawal);
  }
  if (divorceStatus === DivorceStatusesEnum.DIVORCE_NOT_STARTED) {
    contractButtons.push(contractButtonsHelper.requestDivorce);
  }
  if (divorceStatus === DivorceStatusesEnum.DIVORCE_DONE) {
    contractButtons.push(contractButtonsHelper.getFunds);
  }

  const additionalContentRenderType = (() => {
    if (divorceStatus === DivorceStatusesEnum.DIVORCE_DONE) {
      return 'weddingSuccessfulDivorce';
    }
    if (withdrawalStatus === WithdrawalStatusesEnum.WITHDRAWAL_DONE) {
      return 'weddingSuccessfulWithdrawal';
    }
    if (divorceStatus === DivorceStatusesEnum.DIVORCE_PENDING) {
      return 'weddingRequestDivorce';
    }
    if (withdrawalStatus === WithdrawalStatusesEnum.WITHDRAWAL_PENDING) {
      return 'weddingRequestWithdrawal';
    }
    return undefined;
  })() as TAdditionalContentRenderType;

  return {
    ...createContractCard(
      name, address, is_testnet, createdAt, contractCreationData, specificContractData,
    ),
    contractType: 'Wedding contract',
    additionalContentRenderType,
    contractButtons,
  } as IContractsCard;
};

export const createContractCards = (data: IGetContractsWithSpecificField) => [
  ...data.crowdsales.map((crowdsale) => createCrowdsaleCard(crowdsale)),
  ...data.tokens.map((token) => createTokenCard(token)),
  ...data.lostkeys.map((lostkey) => createLostkeyCard(lostkey)),
  ...data.lastwills.map((lastwill) => createWillCard(lastwill)),
  ...data.weddings.map((wedding) => createWeddingCard(wedding)),
].map(
  (data) => ({
    ...data,
    contractKey: JSON.stringify(data),
  } as IContractsCard),
);

const contractLogos: Record<TContractType, React.ReactElement> = {
  'Crowdsale contract': <CrowdsaleIcon />,
  'Lostkey contract': <KeyIcon />,
  'Token contract': <ContractTokenIcon />,
  'Wedding contract': <WeddingRingIcon />,
  'Will contract': <WillContract />,
};
export const getContractLogo = (contractType: TContractType) => contractLogos[contractType];
