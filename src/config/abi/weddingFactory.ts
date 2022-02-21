import { AbiItem } from 'web3-utils';

export default [
  {
    type: 'event',
    name: 'NewContract',
    inputs: [
      {
        type: 'address',
        name: 'contractAddress',
        internalType: 'address',
        indexed: false,
      },
      {
        type: 'address',
        name: 'firstPartner',
        internalType: 'address',
        indexed: false,
      },
      {
        type: 'address',
        name: 'secondPartner',
        internalType: 'address',
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'OwnershipTransferred',
    inputs: [
      {
        type: 'address',
        name: 'previousOwner',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'address',
        name: 'newOwner',
        internalType: 'address',
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'deployWedding',
    inputs: [
      { type: 'address', name: 'tokenToPay', internalType: 'address' },
      { type: 'address', name: '_firstPartner', internalType: 'address' },
      { type: 'address', name: '_secondPartner', internalType: 'address' },
      {
        type: 'uint256',
        name: '_decisionTimeWithdrawal',
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: '_decisionTimeDivorce',
        internalType: 'uint256',
      },
      {
        type: 'uint8',
        name: '_percentageToProposingWhenDisputed',
        internalType: 'uint8',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'getToken',
    inputs: [{ type: 'address', name: '_token', internalType: 'address' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'address', name: '', internalType: 'address' }],
    name: 'owner',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'price',
    inputs: [{ type: 'address', name: '', internalType: 'address' }],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'renounceOwnership',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'setPrice',
    inputs: [
      { type: 'address', name: '_token', internalType: 'address' },
      { type: 'uint256', name: '_price', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'transferOwnership',
    inputs: [{ type: 'address', name: 'newOwner', internalType: 'address' }],
  },
] as AbiItem[];