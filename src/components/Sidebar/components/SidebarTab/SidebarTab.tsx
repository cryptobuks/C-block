import React, { VFC } from 'react';

import { Box, Typography } from '@material-ui/core';
import clsx from 'clsx';

import { BaseSVGIconProps } from 'theme/icons/components/BaseSVGIcon';
import { Link } from 'react-router-dom';
import { useStyles } from './SidebarTab.styles';

export interface SidebarTabProps {
  isSelected?: boolean;
  Icon: React.FC<Partial<Pick<BaseSVGIconProps, 'color' | 'htmlColor'>>>;
  label: string;
  link?: string;
  className?: string;
}

export const SidebarTab: VFC<SidebarTabProps> = ({
  isSelected, Icon, label, link, className,
}) => {
  const classes = useStyles({ isSelected });
  return (
    <Link to={link} className={clsx(classes.tab, className)}>
      <Box className={classes.iconWrapper}><Icon /></Box>
      <Typography variant="body1" className={classes.tabLabel}>{label}</Typography>
    </Link>
  );
};
