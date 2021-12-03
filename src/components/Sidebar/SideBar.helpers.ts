import { routes } from 'appConstants';
import {
  FileTextIcon, PlusCircleIcon, SettingGearIcon,
} from 'theme/icons';

export const navigationTabs = [
  {
    Icon: PlusCircleIcon,
    label: 'Create Contract',
    link: routes.main.root,
  },
  {
    Icon: FileTextIcon,
    label: 'My contracts',
    link: routes.myContracts.root,
  },
  {
    Icon: SettingGearIcon,
    label: 'Custom development',
    link: routes.customDevelopment.root,
  },
];
