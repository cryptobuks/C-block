import { TNullable } from './base';
import {
  TMyContracts,
} from './store';

interface IPreviewContractNavigationState {
  contractPreview: {
    isReadonly: boolean;
    data: TMyContracts;
    address: string;
  };
}
export type TPreviewContractNavigationState =
  TNullable<IPreviewContractNavigationState>;
