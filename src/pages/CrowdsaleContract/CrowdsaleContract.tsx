import React, { FC, Fragment } from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
} from '@material-ui/core';
import {
  Formik, Form, Field, FieldProps, FieldArray,
} from 'formik';
import clsx from 'clsx';
import { CloseCircleIcon, PlusIcon } from 'theme/icons';
import { CheckBox } from 'components/CheckBox';
import contractFormsSelector from 'store/contractForms/selectors';
import {
  ContractFormsState,
  State,
  TokenContract as TokenContractType,
} from 'types';
import { useShallowSelector } from 'hooks';
import {
  dynamicFormDataTemplate,
  setTokenContractForm,
} from 'store/contractForms/reducer';
import { useDispatch } from 'react-redux';
import {
  tokenContractFormConfigStart,
  validationSchema,
  dynamicFormDataConfig,
  tokenContractFormConfigEnd,
  crowdsaleContractFormConfigSoftcap,
} from './CrowdsaleContract.helpers';
import { useStyles } from './CrowdsaleContract.styles';
import { TokenBlockForm } from './components';

export const CrowdsaleContract: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { tokenContract } = useShallowSelector<State, ContractFormsState>(
    contractFormsSelector.getContractForms,
  );
  return (
    <Container>
      <Formik
        enableReinitialize
        initialValues={tokenContract}
        validationSchema={validationSchema}
        onSubmit={(values: TokenContractType) => {
          dispatch(setTokenContractForm(values));
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
            {tokenContractFormConfigStart.map((formSection, index) => (
              <Grid
                key={`start_${index.toString()}`}
                className={classes.crowdsaleContractFormSection}
                container
              >
                {formSection.map(
                  ({
                    id, name, renderProps, helperText, isShort,
                  }) => (
                    <Grid
                      key={id}
                      item
                      xs={12}
                      sm={isShort ? 6 : 12}
                      md={isShort ? 3 : 6}
                      lg={isShort ? 3 : 6}
                      xl={isShort ? 3 : 6}
                    >
                      <Field
                        id={id}
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
                          key={i.toString()}
                          className={clsx(
                            { [classes.helperText]: i === 0 },
                            's',
                          )}
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
            ))}
            <Box className={classes.crowdsaleContractFormSection}>
              <FieldArray name="tokens">
                {({ remove, push }) => values.tokens.map((token, i) => {
                  const tokensErrors =
                      (errors.tokens?.length && errors.tokens[i]) || {};
                  const tokensTouched =
                      (touched.tokens?.length && touched.tokens[i]) || {};
                    // const totalTokenAmount = values.tokens.reduce((acc, tokenForm) => {
                    //   // eslint-disable-next-line no-param-reassign
                    //   acc += +tokenForm.amount;
                    //   return acc;
                    // }, 0);
                  return (
                    <Fragment key={`dynamic_${i.toString()}`}>
                      <TokenBlockForm
                        isFirst={i === 0}
                        deleteForm={() => remove(i)}
                      >
                        {dynamicFormDataConfig.map(
                          (
                            {
                              id, name, renderProps, isShort, helperText,
                            },
                            index,
                          ) => (
                            <Grid
                              key={`${name}_${index.toString()}`}
                              className={clsx(classes[name])}
                              item
                              xs={12}
                              sm={6}
                            >
                              <Field
                                id={`tokens[${i}].${id}`}
                                name={`tokens[${i}].${name}`}
                                render={({
                                  form: { isSubmitting },
                                }: FieldProps) => (
                                  <TextField
                                    className={clsx({
                                      [classes.shortTextField]: isShort,
                                    })}
                                    {...renderProps}
                                    name={`tokens[${i}].${name}`}
                                    disabled={isSubmitting}
                                    value={token[name]}
                                    error={
                                        tokensErrors[name] &&
                                        tokensTouched[name]
                                      }
                                    onChange={handleChange(
                                      `tokens[${i}].${name}`,
                                    )}
                                    onBlur={handleBlur}
                                  />
                                )}
                              />
                              {helperText.map((text, helperTextIndex) => (
                                <Typography
                                  key={i.toString()}
                                  className={clsx(
                                    {
                                      [classes.helperText]:
                                          helperTextIndex === 0,
                                    },
                                    's',
                                  )}
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {text}
                                </Typography>
                              ))}
                            </Grid>
                          ),
                        )}
                      </TokenBlockForm>
                      {i === values.tokens.length - 1 && (
                      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Button
                          variant="outlined"
                          endIcon={<PlusIcon />}
                          onClick={() => push(dynamicFormDataTemplate)}
                        >
                          Add address
                        </Button>
                        {/* <Typography
                            className={clsx(classes.helperText, 's')}
                            variant="body1"
                            color="textSecondary"
                          >
                            You can reserve the tokens for Team, Bonuses, Bounties - these
                            tokens will be created,but can’t be sold until token sale completion.
                          </Typography> */}
                        {/* <Typography
                            className={clsx(classes.helperText, 'l')}
                            variant="body1"
                            color="textSecondary"
                          >
                            Total supply:{' '}
                            <span className={classes.newCount}>
                              {`${totalTokenAmount} New`}
                            </span>
                          </Typography> */}
                      </Grid>
                      )}
                    </Fragment>
                  );
                })}
              </FieldArray>
            </Box>
            <Grid container className={classes.crowdsaleContractFormSection}>
              {tokenContractFormConfigEnd.map(
                ({
                  id, name, renderProps, helperText,
                }) => (
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={4} key={id}>
                    <Field
                      id={id}
                      name={name}
                      render={() => (
                        <CheckBox
                          {...renderProps}
                          onClick={handleChange}
                          value={values[name]}
                        />
                      )}
                    />
                    {helperText.map((text, i) => (
                      <Typography
                        key={i.toString()}
                        className={clsx({ [classes.helperText]: i === 0 }, 's')}
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
            <Grid
              className={classes.crowdsaleContractFormSection}
              container
            >
              {crowdsaleContractFormConfigSoftcap.map(
                ({
                  id, name, renderProps, helperText, isShort,
                }) => (
                  <Grid
                    key={id}
                    item
                    xs={12}
                    sm={isShort ? 6 : 12}
                    md={isShort ? 3 : 6}
                    lg={isShort ? 3 : 6}
                    xl={isShort ? 3 : 6}
                  >
                    <Field
                      id={id}
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
                        key={i.toString()}
                        className={clsx({ [classes.helperText]: i === 0 }, 's')}
                        variant="body1"
                        color="textSecondary"
                      >
                        {text} 5
                      </Typography>
                    ))}
                  </Grid>
                ),
              )}
            </Grid>
            <Box className={classes.crowdsaleContractFormSection}>
              <Button
                className={classes.submitButton}
                size="large"
                type="submit"
                color="secondary"
                disabled={!isValid}
                variant="outlined"
              >
                Send
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
