import { routes } from 'appConstants';
import {
  FileTextIcon, PlusCircleIcon, SettingGearIcon,
} from 'theme/icons';

export const navigationTabs = [
  {
    Icon: PlusCircleIcon,
    label: 'Create Contract',
    link: routes.root,
  },
  {
    Icon: FileTextIcon,
    label: 'My contracts',
    link: routes['my-contracts'].root,
  },
  {
    Icon: SettingGearIcon,
    label: 'Custom development',
    link: routes['custom-development'].root,
  },
];
