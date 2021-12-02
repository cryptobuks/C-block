import React, { ReactNode, FC } from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import forEach from 'lodash/forEach';

import {
  COLOR_AKZ,
  COLOR_ACID_GREEN,
  COLOR_GREEN,
  COLOR_BLACK,
  COLOR_BLACK_1,
  COLOR_BLACK_2,
  COLOR_BLACK_3,
  COLOR_BLACK_4,
  COLOR_GREY,
  COLOR_GREY_1,
} from './colors.constant';

export default {
  title: 'theme/colors',
};

const useBlockStyles = makeStyles({
  container: {
    display: 'flex',
    marginBottom: 5,
    alignItems: 'center',
  },
  block: {
    width: 40,
    height: 40,
    marginRight: 10,
    border: '1px solid lightgray',
  },
});

interface ColorBlockProps {
  title: string;
  color: string;
}

const ColorBlock: React.FC<ColorBlockProps> = ({ color, title }) => {
  const classes = useBlockStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.block} style={{ background: color }} />
      <Typography>{color}&nbsp;&nbsp;</Typography>
      <Typography> {title}</Typography>
    </Box>
  );
};

const useGroupStyles = makeStyles({
  container: {
    margin: '0 10px 20px 10px',
  },
});

interface ColorGroupProps {
  title: string;
  colors: Record<string, string>;
}

const ColorsGroup: FC<ColorGroupProps> = ({ title, colors }) => {
  const classes = useGroupStyles();

  const content: ReactNode[] = [];
  forEach(colors, (color, colorTitle) => {
    content.push(<ColorBlock key={color} color={color} title={colorTitle} />);
  });

  return (
    <Box className={classes.container}>
      <Typography variant="h6">{title}</Typography>
      {content}
    </Box>
  );
};

interface ColorGroup {
  title: string;
  colors: Record<string, string>;
}
const colorGroups: ColorGroup[] = [
  {
    title: 'Primary',
    colors: {
      COLOR_AKZ,
      COLOR_ACID_GREEN,
      COLOR_GREEN,
      COLOR_BLACK,
      COLOR_BLACK_1,
      COLOR_BLACK_2,
      COLOR_BLACK_3,
      COLOR_BLACK_4,
      COLOR_GREY,
      COLOR_GREY_1,
    },
  },
];

export const Colors: FC = () => {
  const content = colorGroups
    // eslint-disable-next-line react/no-array-index-key
    .map((group, index) => <ColorsGroup key={index} colors={group.colors} title={group.title} />);

  return <Box>{content}</Box>;
};
