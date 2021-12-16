export type StaticTokenContractPreviewHelperType = {
  key?: string;
  label: string;
  shouldSkipObjectValue?: boolean;
  value?: string;
};

export const staticTokenContractPreviewHelpers: StaticTokenContractPreviewHelperType[][] = [
  [
    {
      key: 'tokenName',
      label: 'Token name:',
    },
    {
      key: 'decimals',
      label: 'Decimals:',
    },
    {
      key: 'tokenSymbol',
      label: 'Token symbol:',
    },
    {
      shouldSkipObjectValue: true,
      label: 'Token symbol:',
      value: 'ERC20',
    },
  ],
  [
    {
      key: 'futureMinting',
      label: 'Future minting',
    },
    {
      key: 'burnable',
      label: 'Burnable:',
    },
    {
      key: 'freezable',
      label: 'Freezable:',
    },
  ],
];
