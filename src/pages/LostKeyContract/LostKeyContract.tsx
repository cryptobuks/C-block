/* eslint-disable react/no-array-index-key */
import React, {
  FC, Fragment, useEffect,
} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  MenuItem,
} from '@material-ui/core';
import {
  Formik, Form, Field, FieldProps, FieldArray,
} from 'formik';
import clsx from 'clsx';

import { CloseCircleIcon, PlusIcon } from 'theme/icons';
import contractFormsSelector from 'store/contractForms/selectors';
import userSelector from 'store/user/selectors';
import {
  ContractFormsState, State, ILostKeyContract, UserState,
} from 'types';
import { useShallowSelector } from 'hooks';
import {
  lostKeyContractDynamicFormInitialData,
  setLostKeyContractForm,
} from 'store/contractForms/reducer';
import { routes, TOKEN_ADDRESSES_MAX_COUNT } from 'appConstants';
import { SliderWithMaxSectionValue, RemovableContractsFormBlock } from 'components';
import {
  validationSchema,
  dynamicSectionFormConfig,
  contractNameSectionConfig,
  managementAddressSectionConfig,
  rewardAmountSectionConfig,
  confirmLiveStatusSectionConfig,
} from './LostKeyContract.helpers';
import { useStyles } from './LostKeyContract.styles';

const MAX_RESERVES_PERCENTS = 100;

const getUnallocatedResidue = (
  allocatedResidues: number[], maxSum = MAX_RESERVES_PERCENTS,
) => maxSum - allocatedResidues.reduce((sum, value) => sum + value, 0);
const getMaxSliderValue = (
  currentValue: number,
  allocatedResidues: number[],
  maxSum = MAX_RESERVES_PERCENTS,
) => currentValue + getUnallocatedResidue(allocatedResidues, maxSum);

export const LostKeyContract: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    lostKeyContract,
  } = useShallowSelector<State, ContractFormsState>(contractFormsSelector.getContractForms);
  const { address: userAddress } = useShallowSelector<State, UserState>(userSelector.getUser);

  useEffect(() => {
    dispatch(setLostKeyContractForm({
      ...lostKeyContract,
      managementAddress: userAddress,
    }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, userAddress]);

  return (
    <Container>
      <Formik
        enableReinitialize
        initialValues={lostKeyContract}
        validationSchema={validationSchema}
        onSubmit={(values: ILostKeyContract) => {
          dispatch(setLostKeyContractForm(values));
          navigate(routes['lostkey-contract']['preview-contract'].root);
        }}
      >
        {({
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
          isValid,
          // setFieldValue,
          // setFieldTouched,
        }) => (
          <Form className={classes.form} translate={undefined}>
            <Grid className={clsx(classes.gridContainer, classes.contractNameSection)} container>
              {
                contractNameSectionConfig.map(({
                  key, name, renderProps, helperText,
                }) => (
                  <Grid
                    key={key}
                    className={classes.gridItem}
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                  >
                    <Field
                      id={key}
                      name={name}
                      render={({ form: { isSubmitting } }: FieldProps) => (
                        <TextField
                          {...renderProps}
                          disabled={isSubmitting}
                          onChange={handleChange}
                          value={values[name]}
                          onBlur={handleBlur}
                          error={errors[name] && touched[name]}
                        />
                      )}
                    />
                    {helperText.map((text, i) => (
                      <Typography
                        key={i}
                        className={clsx(classes.helperText)}
                        variant="body1"
                        color="textSecondary"
                      >
                        {text}
                      </Typography>
                    ))}
                  </Grid>
                ))
              }
            </Grid>

            <Grid className={clsx(classes.gridContainer, classes.managementAddressSection)} container>
              {
                managementAddressSectionConfig.map(({
                  key, title, name, helperText,
                }) => (
                  <Grid
                    key={key}
                    className={classes.gridItem}
                    item
                    xs={12}
                    sm={6}
                  >
                    <Typography
                      className={clsx(classes.managementAddressSectionTitle)}
                      variant="body1"
                    >
                      {title}
                    </Typography>
                    <TextField
                      disabled
                      value={values[name]}
                    />
                    {helperText.map((text, i) => (
                      <Typography
                        key={i}
                        className={clsx(classes.helperText)}
                        variant="body1"
                        color="textSecondary"
                      >
                        {text}
                      </Typography>
                    ))}
                  </Grid>
                ))
              }
              <Box className={clsx(classes.gridContainer, classes.reservesSection)}>
                <FieldArray name="reservesConfigs">
                  {({ remove, push }) => values.reservesConfigs.map((reserves, i) => {
                    const reservesConfigsErrors =
                        (errors.reservesConfigs?.length && errors.reservesConfigs[i]) || {};
                    const reservesConfigsTouched =
                        (touched.reservesConfigs?.length && touched.reservesConfigs[i]) || {};
                    return (
                      <Fragment key={`dynamic_${i}`}>
                        <RemovableContractsFormBlock
                          isFirst={i === 0}
                          deleteForm={() => remove(i)}
                        >
                          <Fragment key={`dynamic_${i}`}>
                            {dynamicSectionFormConfig.fields.map(
                              (
                                {
                                  key, name, renderProps, helperText,
                                },
                                index,
                              ) => (
                                <Grid
                                  key={`${name}_${index}`}
                                  className={clsx(classes[name])}
                                  item
                                  xs={12}
                                  sm={6}
                                >
                                  <Field
                                    id={`reservesConfigs[${i}].${key}`}
                                    name={`reservesConfigs[${i}].${name}`}
                                    render={({
                                      form: { isSubmitting },
                                    }: FieldProps) => (
                                      <TextField
                                        {...renderProps}
                                        name={`reservesConfigs[${i}].${name}`}
                                        disabled={isSubmitting}
                                        value={reserves[name]}
                                        error={
                                            reservesConfigsErrors[name] &&
                                            reservesConfigsTouched[name]
                                          }
                                        onChange={handleChange(
                                          `reservesConfigs[${i}].${name}`,
                                        )}
                                        onBlur={handleBlur}
                                      />
                                    )}
                                  />
                                  {helperText.map((text) => (
                                    <Typography
                                      key={i}
                                      className={clsx(classes.helperText)}
                                      variant="body1"
                                      color="textSecondary"
                                    >
                                      {text}
                                    </Typography>
                                  ))}
                                </Grid>
                              ),
                            )}
                            <Grid item xs={12}>
                              <Field
                                id={`reservesConfigs[${i}].percents`}
                                name={`reservesConfigs[${i}].percents`}
                                render={({
                                  form: { isSubmitting },
                                }: FieldProps) => (
                                  <SliderWithMaxSectionValue
                                    disabled={isSubmitting}
                                    value={+reserves.percents}
                                    min={0}
                                    maxSectionValue={getMaxSliderValue(
                                      +reserves.percents,
                                      values.reservesConfigs.map((item) => +item.percents),
                                    )}
                                    max={100}
                                    onBlur={handleBlur}
                                    onChange={(_, newRawValue) => {
                                      const newValue = Array.isArray(newRawValue)
                                        ? newRawValue[0]
                                        : newRawValue;

                                      if (newValue === +reserves.percents) return;

                                      const maxValue = getMaxSliderValue(
                                        +reserves.percents,
                                        values.reservesConfigs.map((item) => +item.percents),
                                      );
                                      handleChange(`reservesConfigs[${i}].percents`)(
                                        `${newValue <= maxValue ? newValue : maxValue}`,
                                      );
                                    }}
                                  />
                                )}
                              />
                            </Grid>
                            <Grid item xs={12} sm={5}>
                              {dynamicSectionFormConfig.helperText.map(
                                (text, dynamicSectionFormConfigHelperTextIndex) => (
                                  <Typography
                                    key={dynamicSectionFormConfigHelperTextIndex}
                                    className={clsx(classes.helperText)}
                                    variant="body1"
                                    color="textSecondary"
                                  >
                                    {text}
                                  </Typography>
                                ),
                              )}
                            </Grid>
                          </Fragment>
                        </RemovableContractsFormBlock>
                        {i === values.reservesConfigs.length - 1 && (
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                          {i + 1 < TOKEN_ADDRESSES_MAX_COUNT && (
                          <Button
                            variant="outlined"
                            endIcon={<PlusIcon />}
                            onClick={() => push(lostKeyContractDynamicFormInitialData)}
                          >
                            Add address
                          </Button>
                          )}
                        </Grid>
                        )}
                      </Fragment>
                    );
                  })}
                </FieldArray>
              </Box>
            </Grid>

            <Grid
              className={clsx(classes.gridContainer, classes.confirmLiveStatusSection)}
              container
            >
              <Grid className={classes.gridItem} item xs={12} sm={6}>
                <Typography variant="h3" color="textPrimary">
                  {confirmLiveStatusSectionConfig.title}
                </Typography>
                {confirmLiveStatusSectionConfig.additionalText.map((text, i) => (
                  <Typography
                    key={i}
                    className={clsx(classes.additionalText)}
                    variant="body1"
                    color="textSecondary"
                  >
                    {text}
                  </Typography>
                ))}

                <Grid className={clsx(classes.gridContainer)} container>
                  {confirmLiveStatusSectionConfig.fields.map(
                    ({
                      key, name, renderProps, helperText, selectOptions,
                    }, index) => (
                      <Grid
                        key={key}
                        className={clsx(classes.gridItem, classes.item)}
                        item
                        xs={index ? 7 : 5}
                      >
                        <Field
                          id={key}
                          name={name}
                          render={({ form: { isSubmitting } }: FieldProps) => (
                            <TextField
                              {...renderProps}
                              disabled={isSubmitting}
                              value={values[name]}
                              error={errors[name] && touched[name]}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >{index ? selectOptions.map((option) => (
                              <MenuItem key={option.key} value={option.key}>{option.text}</MenuItem>)) : null}
                            </TextField>
                          )}
                        />
                        {helperText.map((text, i) => (
                          <Typography
                            key={i}
                            className={clsx(classes.helperText)}
                            variant="body1"
                            color="textSecondary"
                          >
                            {text}
                          </Typography>
                        ))}
                      </Grid>
                    ),
                  )}
                </Grid>

                {confirmLiveStatusSectionConfig.helperText.map((text, i) => (
                  <Typography
                    key={i}
                    className={clsx(classes.helperText)}
                    variant="body1"
                    color="textSecondary"
                  >
                    {text}
                  </Typography>
                ))}
              </Grid>
            </Grid>

            <Grid className={clsx(classes.gridContainer, classes.rewardAmountSection)} container>
              {
                rewardAmountSectionConfig.map(({
                  key, name, renderProps, helperText,
                }) => (
                  <Grid
                    key={key}
                    className={classes.gridItem}
                    item
                    xs={12}
                    sm={6}
                  >
                    <Field
                      id={key}
                      name={name}
                      render={({ form: { isSubmitting } }: FieldProps) => (
                        <TextField
                          {...renderProps}
                          disabled={isSubmitting}
                          onChange={handleChange}
                          value={values[name]}
                          onBlur={handleBlur}
                          error={errors[name] && touched[name]}
                        />
                      )}
                    />
                    {helperText.map((text, i) => (
                      <Typography
                        key={i}
                        className={clsx(classes.helperText)}
                        variant="body1"
                        color="textSecondary"
                      >
                        {text}
                      </Typography>
                    ))}
                  </Grid>
                ))
              }
            </Grid>

            <Box className={classes.buttonsGroupSection}>
              <Button
                className={classes.submitButton}
                size="large"
                type="submit"
                color="secondary"
                disabled={!isValid}
                variant="outlined"
              >
                Create
              </Button>

              <Button
                className={classes.resetButton}
                size="large"
                type="reset"
                color="secondary"
                variant="outlined"
                endIcon={<CloseCircleIcon />}
                disabled={!Object.keys(touched).length}
              >
                Clean
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
