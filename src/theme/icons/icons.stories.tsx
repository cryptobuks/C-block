import React, { ReactNode } from 'react';

import { Box, Typography, makeStyles } from '@material-ui/core';
import forEach from 'lodash/forEach';

import { COLOR_GREY } from '../colors';

import { IconProps } from './icons.types';

import * as allIcons from '.';

export default {
  title: 'theme/Icons',
};

interface IconVariantsProps {
  Icon: React.ComponentType<IconProps>;
}

const useBlockStyles = makeStyles(() => ({
  container: {
    display: 'inline-block',
    border: '1px solid lightgray',
    margin: 10,
    textAlign: 'center',
    padding: 5,
  },
  block: {
    display: 'flex',
    margin: '10px 10px 0 10px',
    '& > *': {
      marginRight: 10,
    },
  },
}));

const IconVariants: React.FC<IconVariantsProps> = ({ Icon }) => {
  const classes = useBlockStyles();
  return (
    <Box className={classes.container}>
      <Typography>{Icon.displayName}</Typography>
      <Box className={classes.block}>
        <Icon />
        <Box color={COLOR_GREY}>
          <Icon />
        </Box>
      </Box>
    </Box>
  );
};

export const Icons: React.FC = () => {
  const content: ReactNode[] = [];
  forEach(allIcons, (icon, index) => {
    content.push(<IconVariants key={index} Icon={icon} />);
  });
  return <Box>{content}</Box>;
};
