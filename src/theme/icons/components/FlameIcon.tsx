import React from 'react';

import { COLOR_ACID_GREEN } from 'theme/colors';

import { IconProps } from '../icons.types';

import { BaseSVGIcon } from './BaseSVGIcon';

const size = '24';

export const FlameIcon: React.FC<IconProps> = (props) => (
  <BaseSVGIcon
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill={COLOR_ACID_GREEN}
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M7.49496 9.51647C5.46296 11.7155 5.50596 15.2015 7.62396 17.3605C8.65796 18.4175 10.032 19.0005 11.496 19.0015H11.501C12.968 19.0015 14.347 18.4185 15.386 17.3605C17.542 15.1625 17.538 11.5875 15.377 9.39247L12.391 6.34147C12.089 8.82347 11.158 11.0015 9.49996 11.0015C8.99196 11.0015 8.16396 10.7755 7.49496 9.51647ZM11.501 21.0015H11.494C9.48796 20.9995 7.60596 20.2045 6.19496 18.7595C3.28096 15.7895 3.27696 10.9565 6.18596 7.99147L7.16896 6.99747C7.42296 6.74347 7.79196 6.64547 8.14096 6.73647C8.48796 6.83047 8.75796 7.10347 8.84796 7.45147C9.07796 8.34047 9.35196 8.77747 9.50296 8.94347C9.85796 8.56947 10.5 7.05847 10.5 4.50147C10.5 4.35447 10.5 4.21547 10.492 4.07647C10.473 3.78147 10.586 3.49247 10.8 3.28847C11.197 2.91147 11.833 2.91147 12.214 3.30347L16.804 7.99247C19.724 10.9565 19.729 15.7895 16.814 18.7605C15.395 20.2065 13.509 21.0015 11.501 21.0015Z" fill="inherit" />
    <mask id="mask0_2117_31157" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="4" y="3" width="15" height="19">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.49496 9.51647C5.46296 11.7155 5.50596 15.2015 7.62396 17.3605C8.65796 18.4175 10.032 19.0005 11.496 19.0015H11.501C12.968 19.0015 14.347 18.4185 15.386 17.3605C17.542 15.1625 17.538 11.5875 15.377 9.39247L12.391 6.34147C12.089 8.82347 11.158 11.0015 9.49996 11.0015C8.99196 11.0015 8.16396 10.7755 7.49496 9.51647ZM11.501 21.0015H11.494C9.48796 20.9995 7.60596 20.2045 6.19496 18.7595C3.28096 15.7895 3.27696 10.9565 6.18596 7.99147L7.16896 6.99747C7.42296 6.74347 7.79196 6.64547 8.14096 6.73647C8.48796 6.83047 8.75796 7.10347 8.84796 7.45147C9.07796 8.34047 9.35196 8.77747 9.50296 8.94347C9.85796 8.56947 10.5 7.05847 10.5 4.50147C10.5 4.35447 10.5 4.21547 10.492 4.07647C10.473 3.78147 10.586 3.49247 10.8 3.28847C11.197 2.91147 11.833 2.91147 12.214 3.30347L16.804 7.99247C19.724 10.9565 19.729 15.7895 16.814 18.7605C15.395 20.2065 13.509 21.0015 11.501 21.0015Z" fill="white" />
    </mask>
    <g mask="url(#mask0_2117_31157)" />

  </BaseSVGIcon>
);