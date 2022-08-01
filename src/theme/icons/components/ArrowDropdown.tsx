import React from 'react';

import { IconProps } from '../icons.types';

import { BaseSVGIcon } from './BaseSVGIcon';
import { COLOR_BLACK_3 } from '../../colors';

export const ArrowDropdown: React.FC<IconProps> = (props) => (
  <BaseSVGIcon width="25" height="24" fill={COLOR_BLACK_3} viewBox="0 0 25 24" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.5 15.5002C12.244 15.5002 11.988 15.4023 11.793 15.2073L7.79301 11.2072C7.40201 10.8162 7.40201 10.1842 7.79301 9.79325C8.18401 9.40225 8.81601 9.40225 9.20701 9.79325L12.512 13.0982L15.805 9.91825C16.204 9.53525 16.835 9.54625 17.219 9.94325C17.603 10.3403 17.592 10.9742 17.195 11.3572L13.195 15.2193C13 15.4073 12.75 15.5002 12.5 15.5002" fill="#64656A" />
    <mask id="mask0_2850_43951" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="7" y="9" width="11" height="7">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.5 15.5002C12.244 15.5002 11.988 15.4023 11.793 15.2073L7.79301 11.2072C7.40201 10.8162 7.40201 10.1842 7.79301 9.79325C8.18401 9.40225 8.81601 9.40225 9.20701 9.79325L12.512 13.0982L15.805 9.91825C16.204 9.53525 16.835 9.54625 17.219 9.94325C17.603 10.3403 17.592 10.9742 17.195 11.3572L13.195 15.2193C13 15.4073 12.75 15.5002 12.5 15.5002" fill="white" />
    </mask>
    <g mask="url(#mask0_2850_43951)" />
  </BaseSVGIcon>
);
