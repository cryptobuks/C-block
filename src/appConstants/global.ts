export const TOKEN_ADDRESSES_MAX_COUNT = 4; // supported only 4 tokens to be added to transfer or reserved address in contracts

export const COMPLETE_MODAL_DEFAULT_SUCCESS_TEXT = 'The transaction was successfully completed.';
export const COMPLETE_MODAL_CONTRACT_CREATION_SUCCESS_TEXT = `${COMPLETE_MODAL_DEFAULT_SUCCESS_TEXT}
 Your contract will soon appear in My contracts tab.`;

export const isProduction = true;

export const CUSTOM_DEVELOPMENT_EMAIL = isProduction ? 'dev@c-block.io' : 'dev@c-block.io' as const;
export const PRIVACY_SUPPORT_EMAIL = 'support@c-block.io' as const;
