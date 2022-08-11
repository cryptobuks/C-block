import React, {
  useState,
  useCallback,
  useMemo,
} from 'react';
import {
  FormControlLabel, Radio, RadioGroup,
} from '@material-ui/core';
import clsx from 'clsx';
import { useShallowSelector } from 'hooks';
import userSelectors from 'store/user/selectors';
import { toggleTestnet } from 'store/user/reducer';
import { useDispatch } from 'react-redux';
import { useWalletConnectorContext } from 'services';
// import { setNotification } from 'utils';
import { useStyles } from './NetworkRadioGroup.styles';

export const useNetworkRadioGroup = () => {
  const dispatch = useDispatch();
  const { connect } = useWalletConnectorContext();
  const { isMainnet, wallet } = useShallowSelector(
    userSelectors.getUser,
  );
  // const checkUserAuthenticated = useShallowSelector(
  //   userSelectors.selectIsAuthenticated,
  // );
  const [radioState, setRadioState] = useState(isMainnet ? 'mainnet' : 'testnet');
  const isMainnetSelected = radioState === 'mainnet';
  const classes = useStyles();

  const radioHandler = useCallback((event) => {
    setRadioState(event.target.value);
    dispatch(toggleTestnet());
    // if (checkUserAuthenticated) {
    //   setNotification({
    //     type: 'info',
    //     message: 'You will be logged out. Log in once again',
    //   });
    // }
    connect(wallet);
  }, [connect, dispatch, wallet]);

  const NetworkRadioGroup = useMemo(() => () => (
    <RadioGroup
      value={radioState}
      onChange={radioHandler}
    >
      <FormControlLabel
        classes={{
          label: clsx(classes.label, classes.labelRed),
        }}
        value="testnet"
        control={(
          <Radio
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
          />
        )}
        label="Alfajores testnet"
      />
      <FormControlLabel
        classes={{
          label: classes.label,
        }}
        value="mainnet"
        control={(
          <Radio
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
          />
        )}
        label="Mainnet"
      />
    </RadioGroup>
  ), [classes.checkedIcon, classes.icon, classes.label, classes.labelRed, radioHandler, radioState]);

  return {
    NetworkRadioGroup,
    isMainnetSelected,
    radioState,
    setRadioState,
  };
};
