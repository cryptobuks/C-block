import React from 'react';

import { Box, Switch } from '@material-ui/core';

export default {
  title: 'theme/Switch',
};

export const Default: React.FC = () => (
  <>
    <Box>Small</Box>
    <Switch size="small" checked />
    <Switch size="small" />
    <Switch size="small" checked disabled />
    <Switch size="small" disabled />
    <Box>Small</Box>
    <Switch checked />
    <Switch />
    <Switch checked disabled />
    <Switch disabled />
  </>
);
