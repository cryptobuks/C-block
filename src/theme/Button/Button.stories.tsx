import React from 'react';

import {
  Box, Button, IconButton, Typography,
} from '@material-ui/core';
import { WeddingRingIcon } from '../icons';

export default {
  title: 'theme/Button',
};

export const Default: React.FC = () => (
  <Box>
    <Typography>Outlined</Typography>
    <Box>
      <Button variant="outlined" size="large">BUTTON Xl</Button>
      <Button variant="outlined">BUTTON l</Button>
      <Button variant="outlined" size="small">BUTTON s</Button>
    </Box>
    <Typography>Disabled</Typography>
    <Box>
      <Button variant="outlined" size="large" disabled>BUTTON Xl</Button>
      <Button variant="outlined" disabled>BUTTON l</Button>
      <Button variant="outlined" size="small" disabled>BUTTON s</Button>
    </Box>
    <Typography>Icon left</Typography>
    <Box>
      <Button variant="outlined" size="large" startIcon={<WeddingRingIcon />}>BUTTON Xl</Button>
      <Button variant="outlined" startIcon={<WeddingRingIcon />}>BUTTON l</Button>
      <Button variant="outlined" size="small" startIcon={<WeddingRingIcon />}>BUTTON s</Button>
    </Box>
    <Typography>Icon right</Typography>
    <Box>
      <Button variant="outlined" size="large" endIcon={<WeddingRingIcon />}>BUTTON Xl</Button>
      <Button variant="outlined" endIcon={<WeddingRingIcon />}>BUTTON l</Button>
      <Button variant="outlined" size="small" endIcon={<WeddingRingIcon />}>BUTTON s</Button>
    </Box>
    <Typography>Icon button</Typography>
    <Box>
      <IconButton color="primary"><WeddingRingIcon /></IconButton>
      <IconButton color="primary"><WeddingRingIcon /></IconButton>
      <IconButton color="primary"><WeddingRingIcon /></IconButton>
    </Box>
    <Typography>Icon button secondaty</Typography>
    <Box>
      <IconButton color="secondary"><WeddingRingIcon /></IconButton>
      <IconButton color="secondary"><WeddingRingIcon /></IconButton>
      <IconButton color="secondary"><WeddingRingIcon /></IconButton>
    </Box>
  </Box>
);
