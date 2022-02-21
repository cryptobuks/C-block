import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';

import { AdditionalContent } from '../AdditionalContent';
import { ApproveRejectBox } from '../ApproveRejectBox';
import { ConfirmationTimeBlock } from '../ConfirmationTimeBlock';
import { useStyles as useCommonStyles } from '../../MyContracts.styles';

export const AdditionalContentRequestWithdrawal: FC<{ onApprove: () => void; onReject: () => void }> = ({ onApprove, onReject }) => {
  const commonClasses = useCommonStyles();
  return (
    <AdditionalContent>
      <Box className={commonClasses.contractActionBlockInner}>
        <Typography className={commonClasses.contractActionText}>Request withdrawal</Typography>
        <ApproveRejectBox onApprove={onApprove} onReject={onReject} />
      </Box>
      <ConfirmationTimeBlock className={commonClasses.contractActionBlockInner} />
    </AdditionalContent>
  );
};
