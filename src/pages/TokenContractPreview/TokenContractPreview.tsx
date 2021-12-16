/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Preview } from 'components/Preview';
import { useShallowSelector } from 'hooks';
import contractFormsSelector from 'store/contractForms/selectors';
import { ContractFormsState, State } from 'types';
import { Grid, Typography } from '@material-ui/core';
import { YesNoBlock } from 'components/YesNoBlock';
import clsx from 'clsx';
import { useStyles } from './TokenContractPreview.styles';
import { staticTokenContractPreviewHelpers } from './TokenContractPreview.helpers';

const TokenContractPreview = () => {
  const {
    tokenContract,
  } = useShallowSelector<State, ContractFormsState>(contractFormsSelector.getContractForms);

  const classes = useStyles();
  return (
    <>
      <Preview
        type="token"
        name={tokenContract.tokenName}
        launchAction={() => alert('launch')}
        editAction={() => alert('edit')}
        deleteAction={() => alert('delete')}
      >
        {staticTokenContractPreviewHelpers.map((previewBlock, index) => (
          <Grid container className={classes.tokenContractInfoBlock} key={index}>
            {previewBlock.map(({
              key, label, value, shouldSkipObjectValue,
            }) => (
              <Grid
                item
                xs={6}
                sm={6}
                md={3}
                lg={3}
                xl={3}
                key={label}
                className={classes.previewValueBlock}
              >
                <Typography
                  variant="body1"
                  className={clsx(classes.previewLabel, 's')}
                  color="textSecondary"
                >
                  {label}
                </Typography>
                {typeof tokenContract[key] !== 'boolean' ? (
                  <Typography variant="body1">
                    {shouldSkipObjectValue ? value : tokenContract[key]}
                  </Typography>
                ) : (
                  <YesNoBlock yes={tokenContract[key]} />
                )}
              </Grid>
            ))}
          </Grid>
        ))}
      </Preview>
    </>
  );
};

export default TokenContractPreview;
