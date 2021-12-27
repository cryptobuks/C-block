import { TextFieldProps } from '@material-ui/core';
import * as Yup from 'yup';
import { latinAndNumbers } from 'utils';

export const validationSchema = Yup.object().shape({
  contractName: Yup.string().matches(latinAndNumbers).min(5).required(),
  managementAddress: Yup.string().length(42).required(),

  reservesConfigs: Yup.array().of(
    Yup.object().shape({
      reserveAddress: Yup.string().length(42).required(),
      email: Yup.string().email().required(),
    }),
  ),

  pingIntervalAsValue: Yup.number().positive().required(),
  pingIntervalAsDateUnits: Yup.string().required(),

  rewardAmount: Yup.number().positive().required(),
});

interface ISelectOption {
  key: string;
  text: string;
}

interface IFieldsFormConfig {
  key: string;
  name: string;
  title?: string;
  // icon?: ReactElement;
  renderProps?: {
    label?: string;
    name: string;
  } & TextFieldProps;
  helperText?: string[];
  selectOptions?: ISelectOption[];
}

interface ISectionFieldsConfig {
  key: string;
  title?: string;
  additionalText?: string[];
  helperText?: string[];
  fields: IFieldsFormConfig[];
}

export const contractNameSectionConfig: IFieldsFormConfig[] = [
  {
    key: 'contractName',
    name: 'contractName',
    renderProps: {
      label: 'Contract name',
      name: 'contractName',
    },
    helperText: [
      'Enter name of the project without spaces, usually 5-25 symbols. Lower and uppercase can be used',
    ],
  },
];

export const managementAddressSectionConfig: IFieldsFormConfig[] = [
  {
    key: 'managementAddress',
    name: 'managementAddress',
    title: 'Management address',
    helperText: [
      'This is the wallet address that will be traced for activity. If you want to use different wallet, please connect it for contract creation.',
    ],
  },
];

export const dynamicFormDataConfig: IFieldsFormConfig[] = [
  {
    key: 'reserveAddress',
    name: 'reserveAddress',
    renderProps: {
      label: 'Reserve address',
      name: 'reserveAddress',
      type: 'input',
    },
    helperText: [
      'Specify the backup address to which you want to send funds in the event that a private key is lost from the management address',
    ],
  },
  {
    key: 'email',
    name: 'email',
    renderProps: {
      label: 'E-mail for notification',
      name: 'email',
      type: 'input',
    },
    helperText: [
      'Enter the e-mail address to which you want to send a message about transferring the crypto currency',
    ],
  },
];

export const dynamicSectionFormConfig: ISectionFieldsConfig = {
  key: 'dynamicSectionFormConfig',
  fields: dynamicFormDataConfig,
  helperText: ['You can divide the funds between several reserve accounts. Choose percentage for every reserve address.'],
};

export const confirmLiveStatusSectionConfig: ISectionFieldsConfig = {
  key: 'confirmLiveStatusSection',
  title: 'Define how often you want to confirm your “Live” status',
  additionalText: ['Confirmation transaction every'],
  helperText: ['You will need to send transaction to the contract from management address every time.'],
  fields: [
    {
      key: 'pingIntervalAsValue',
      name: 'pingIntervalAsValue',
      renderProps: {
        label: '',
        name: 'pingIntervalAsValue',
      },
      helperText: [],
    },
    {
      key: 'pingIntervalAsDateUnits',
      name: 'pingIntervalAsDateUnits',
      renderProps: {
        label: '',
        name: 'pingIntervalAsDateUnits',
        select: true,
      },
      selectOptions: [
        {
          key: 'Day',
          text: 'Day',
        },
        {
          key: 'Month',
          text: 'Month',
        },
        {
          key: 'Year',
          text: 'Year',
        },
      ],
      helperText: [],
    },
  ],
};

export const rewardAmountSectionConfig: IFieldsFormConfig[] = [
  {
    key: 'rewardAmount',
    name: 'rewardAmount',
    renderProps: {
      label: 'Сelo',
      name: 'rewardAmount',
    },
    helperText: [
      'This amount of СELO will be paid as a reward to the person who will initiate and pay for gas of the transfer from management to reserve addresses after the conditions for such transfer are met.',
    ],
  },
];
