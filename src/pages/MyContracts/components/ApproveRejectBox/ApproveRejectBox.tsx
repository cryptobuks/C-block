import React, { FC } from 'react';
import { Box, Button } from '@material-ui/core';
import clsx from 'clsx';

import { CloseCircleIcon, CheckmarkCircleIcon } from 'theme/icons';
import { useStyles } from './ApproveRejectBox.styles';
import { useStyles as useCommonStyles } from '../../MyContracts.styles';

export const ApproveRejectBox: FC<{
  onApprove: () => void;
  onReject: () => void;
}> = ({ onApprove, onReject }) => {
  const commonClasses = useCommonStyles();
  const classes = useStyles();
  return (
    <Box>
      <Button
        className={clsx(commonClasses.button, classes.actionButton)}
        variant="outlined"
        endIcon={<CheckmarkCircleIcon />}
        onClick={onApprove}
      >
        Approve
      </Button>
      <Button
        className={clsx(commonClasses.button, classes.actionButton)}
        variant="outlined"
        endIcon={<CloseCircleIcon color="error" />}
        onClick={onReject}
      >
        Reject
      </Button>
    </Box>
  );
};
