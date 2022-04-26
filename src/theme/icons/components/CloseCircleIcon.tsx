import React from 'react';

import { darkTheme } from 'theme';
import { COLOR_BLACK_4 } from 'theme/colors';

import { IconProps } from '../icons.types';

import { BaseSVGIcon } from './BaseSVGIcon';

const size = '24';

export const CloseCircleIcon: React.FC<IconProps> = (props) => {
  const { color, ...otherProps } = props;
  const fillColor = color === 'error' ? darkTheme.palette.error.main : COLOR_BLACK_4;
  return (
    <BaseSVGIcon
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill={fillColor}
      {...otherProps}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M14.707 9.293C14.316 8.902 13.684 8.902 13.293 9.293L12 10.586L10.707 9.293C10.316 8.902 9.684 8.902 9.293 9.293C8.902 9.684 8.902 10.316 9.293 10.707L10.586 12L9.293 13.293C8.902 13.684 8.902 14.316 9.293 14.707C9.488 14.902 9.744 15 10 15C10.256 15 10.512 14.902 10.707 14.707L12 13.414L13.293 14.707C13.488 14.902 13.744 15 14 15C14.256 15 14.512 14.902 14.707 14.707C15.098 14.316 15.098 13.684 14.707 13.293L13.414 12L14.707 10.707C15.098 10.316 15.098 9.684 14.707 9.293ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z" />
      <mask id="mask0_130_1988" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20">
        <path fillRule="evenodd" clipRule="evenodd" d="M14.707 9.293C14.316 8.902 13.684 8.902 13.293 9.293L12 10.586L10.707 9.293C10.316 8.902 9.684 8.902 9.293 9.293C8.902 9.684 8.902 10.316 9.293 10.707L10.586 12L9.293 13.293C8.902 13.684 8.902 14.316 9.293 14.707C9.488 14.902 9.744 15 10 15C10.256 15 10.512 14.902 10.707 14.707L12 13.414L13.293 14.707C13.488 14.902 13.744 15 14 15C14.256 15 14.512 14.902 14.707 14.707C15.098 14.316 15.098 13.684 14.707 13.293L13.414 12L14.707 10.707C15.098 10.316 15.098 9.684 14.707 9.293ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z" />
      </mask>
      <g mask="url(#mask0_130_1988)" />
    </BaseSVGIcon>
  );
};
