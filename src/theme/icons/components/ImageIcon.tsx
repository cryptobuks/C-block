import React from 'react';

import { COLOR_ACID_GREEN } from 'theme/colors';

import { IconProps } from '../icons.types';

import { BaseSVGIcon } from './BaseSVGIcon';

export const ImageIcon: React.FC<IconProps> = (props) => (
  <BaseSVGIcon
    width="33"
    height="32"
    viewBox="0 0 33 32"
    fill={COLOR_ACID_GREEN}
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M11 13.3333C12.1385 13.3333 13.0625 12.4373 13.0625 11.3333C13.0625 10.2293 12.1385 9.33333 11 9.33333C9.8615 9.33333 8.9375 10.2293 8.9375 11.3333C8.9375 12.4373 9.8615 13.3333 11 13.3333M24.75 25.3333H9.02138L18.6532 17.54C18.9915 17.2613 19.6048 17.2627 19.9361 17.5387L26.125 22.6587V24C26.125 24.736 25.509 25.3333 24.75 25.3333M8.25 6.66667H24.75C25.509 6.66667 26.125 7.264 26.125 8V19.152L21.7209 15.5093C20.3596 14.3867 18.2298 14.3867 16.8809 15.5013L6.875 23.5973V8C6.875 7.264 7.491 6.66667 8.25 6.66667M24.75 4H8.25C5.97575 4 4.125 5.79467 4.125 8V24C4.125 26.2053 5.97575 28 8.25 28H24.75C27.0243 28 28.875 26.2053 28.875 24V8C28.875 5.79467 27.0243 4 24.75 4" fill="#70FF00" />
    <mask id="mask0_2574_41863" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="4" y="4" width="25" height="24">
      <path fillRule="evenodd" clipRule="evenodd" d="M11 13.3333C12.1385 13.3333 13.0625 12.4373 13.0625 11.3333C13.0625 10.2293 12.1385 9.33333 11 9.33333C9.8615 9.33333 8.9375 10.2293 8.9375 11.3333C8.9375 12.4373 9.8615 13.3333 11 13.3333M24.75 25.3333H9.02138L18.6532 17.54C18.9915 17.2613 19.6048 17.2627 19.9361 17.5387L26.125 22.6587V24C26.125 24.736 25.509 25.3333 24.75 25.3333M8.25 6.66667H24.75C25.509 6.66667 26.125 7.264 26.125 8V19.152L21.7209 15.5093C20.3596 14.3867 18.2298 14.3867 16.8809 15.5013L6.875 23.5973V8C6.875 7.264 7.491 6.66667 8.25 6.66667M24.75 4H8.25C5.97575 4 4.125 5.79467 4.125 8V24C4.125 26.2053 5.97575 28 8.25 28H24.75C27.0243 28 28.875 26.2053 28.875 24V8C28.875 5.79467 27.0243 4 24.75 4" fill="white" />
    </mask>
    <g mask="url(#mask0_2574_41863)" />

  </BaseSVGIcon>
);