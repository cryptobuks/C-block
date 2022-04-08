import { Box, Typography } from '@material-ui/core';
import clsx from 'clsx';

import { SectionsBar } from 'components';
import React, {
  VFC,
} from 'react';
import { TokenContractDynamicForm } from 'types';
import {
  COLOR_ACID_GREEN, COLOR_ORANGE, COLOR_PINK, COLOR_PURPLE,
} from 'theme/colors';
import { useStyles } from './DistributionBar.styles';

interface IProps {
  tokens: TokenContractDynamicForm[];
  tokenSymbol: string;
}

export const DistributionBar: VFC<IProps> = ({ tokens, tokenSymbol }) => {
  const classes = useStyles();

  const colors = [COLOR_PURPLE, COLOR_ACID_GREEN, COLOR_PINK, COLOR_ORANGE];

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <SectionsBar circles={
          tokens.map(({ amount }, index) => ({
            css: {
              stroke: colors[index],
            },
            value: +amount,
          }))
        }
        />
        <Box className={classes.list}>
          {
          tokens.map(({ name, amount }, index) => (
            <Box key={name + amount} className={classes.listItem}>
              <Box style={{ background: colors[index] }} className={classes.listItemPoint} />
              <Typography className={clsx(classes.listItemText, 's')} variant="body1">{name} {amount} {tokenSymbol}</Typography>
            </Box>
          ))
        }
        </Box>
      </Box>
    </Box>
  );
};
