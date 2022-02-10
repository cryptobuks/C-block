export default [{
  type: 'event',
  name: 'NewContract',
  inputs: [{
    type: 'address', name: 'contractAddress', internalType: 'address', indexed: false,
  }, {
    type: 'uint8', name: 'contractType', internalType: 'uint8', indexed: false,
  }],
  anonymous: false,
}, {
  type: 'event',
  name: 'OwnershipTransferred',
  inputs: [{
    type: 'address', name: 'previousOwner', internalType: 'address', indexed: true,
  }, {
    type: 'address', name: 'newOwner', internalType: 'address', indexed: true,
  }],
  anonymous: false,
}, {
  type: 'function', stateMutability: 'nonpayable', outputs: [], name: 'deployERC20BurnablePausableToken', inputs: [{ type: 'address[2]', name: 'tokenToPayAndOwner', internalType: 'address[2]' }, { type: 'string', name: 'name', internalType: 'string' }, { type: 'string', name: 'symbol', internalType: 'string' }, { type: 'uint8', name: '_decimals', internalType: 'uint8' }, { type: 'address[]', name: 'owner', internalType: 'address[]' }, { type: 'uint256[]', name: 'initSupply', internalType: 'uint256[]' }],
}, {
  type: 'function', stateMutability: 'nonpayable', outputs: [], name: 'deployERC20PausableToken', inputs: [{ type: 'address[2]', name: 'tokenToPayAndOwner', internalType: 'address[2]' }, { type: 'string', name: 'name', internalType: 'string' }, { type: 'string', name: 'symbol', internalType: 'string' }, { type: 'uint8', name: '_decimals', internalType: 'uint8' }, { type: 'address[]', name: 'owner', internalType: 'address[]' }, { type: 'uint256[]', name: 'initSupply', internalType: 'uint256[]' }],
}, {
  type: 'function', stateMutability: 'nonpayable', outputs: [], name: 'getToken', inputs: [{ type: 'address', name: '_token', internalType: 'address' }],
}, {
  type: 'function', stateMutability: 'view', outputs: [{ type: 'address', name: '', internalType: 'address' }], name: 'owner', inputs: [],
}, {
  type: 'function', stateMutability: 'view', outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }], name: 'price', inputs: [{ type: 'address', name: '', internalType: 'address' }, { type: 'uint256', name: '', internalType: 'uint256' }],
}, {
  type: 'function', stateMutability: 'nonpayable', outputs: [], name: 'renounceOwnership', inputs: [],
}, {
  type: 'function', stateMutability: 'nonpayable', outputs: [], name: 'setPrice', inputs: [{ type: 'address', name: '_token', internalType: 'address' }, { type: 'uint256[2]', name: '_price', internalType: 'uint256[2]' }],
}, {
  type: 'function', stateMutability: 'nonpayable', outputs: [], name: 'transferOwnership', inputs: [{ type: 'address', name: 'newOwner', internalType: 'address' }],
}];