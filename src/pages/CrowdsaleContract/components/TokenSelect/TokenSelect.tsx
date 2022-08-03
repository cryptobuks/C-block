/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  ChangeEvent, FC, useCallback, useEffect, useMemo, useState,
} from 'react';
import {
  Box, ListSubheader, MenuItem, Select, TextField,
} from '@material-ui/core';
import { ArrowDropdown, SearchIcon } from 'theme/icons';
import { tokensMainnet, tokensTestnet } from 'config';
import { useShallowSelector, useWeb3Provider } from 'hooks';
import userSelector from 'store/user/selectors';
import Web3 from 'web3';
import { useDispatch } from 'react-redux';
import { getPreviewTokenSymbol } from 'store/contractForms/actions';
import contractFormsSelector from 'store/contractForms/selectors';
import { useStyles } from './TokenSelect.styles';
import { SelectInput } from './SelectInput';

interface ITokenSelectProps {
  fieldValue: string;
  handleUpdateField: any;
  fieldIndex: number;
  fieldName: string;
  className?: string;
}

export const TokenSelect: FC<ITokenSelectProps> = ({
  fieldValue,
  handleUpdateField,
  fieldIndex,
  fieldName,
  className,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { getDefaultProvider } = useWeb3Provider();

  const { isMainnet } = useShallowSelector(userSelector.getUser);
  const temporaryPaymentTokenSymbols = useShallowSelector(contractFormsSelector.getTemporaryTokenSymbols);

  const [selectedOption, setSelectedOption] = useState('');
  const [searchText, setSearchText] = useState<string>('');

  const containsText = (text, searchText) => text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
  const displayedOptions = useMemo(
    () => {
      const tokenOptions = isMainnet ? tokensMainnet : tokensTestnet;
      return tokenOptions.filter((option) => containsText(option.label, searchText));
    },
    [isMainnet, searchText],
  );
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const handleSetOption = useCallback((e: ChangeEvent<any>) => {
    const currentToken = displayedOptions.filter((option) => option.name === e.target.value)[0];
    setSelectedOption(currentToken.name);
    handleUpdateField(fieldName, currentToken.address);
  }, [displayedOptions, fieldName, handleUpdateField]);

  const handleSetSearchText = (e: ChangeEvent<any>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (Web3.utils.isAddress(fieldValue)) {
      const symbol = displayedOptions.filter((option) => option.address === fieldValue)[0];
      if (!symbol) {
        setSelectedOption('');
        dispatch(getPreviewTokenSymbol({
          provider: getDefaultProvider(),
          tokenAddress: fieldValue,
          tokenIndex: fieldIndex,
        }));
      } else {
        setSelectedOption(symbol.name);
      }
    }
  }, [dispatch, displayedOptions, fieldIndex, fieldValue, getDefaultProvider]);

  return (
    <Select
      MenuProps={{
        autoFocus: false,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        getContentAnchorEl: null,
        classes: {
          paper: classes.selectDropdownWrapper,
        },
      }}
      labelId="search-select-label"
      id="search-select"
      value={selectedOption || ''}
      // @ts-ignore
      onChange={(e) => handleSetOption(e)}
      renderValue={selectedOption !== '' ? undefined : () => <Box>{temporaryPaymentTokenSymbols[fieldIndex] || 'Token'}</Box>}
      displayEmpty
      IconComponent={() => (
        <ArrowDropdown />
      )}
      input={<SelectInput />}
      classes={{
        root: className,
        selectMenu: classes.listItemSelected,
      }}
    >
      <ListSubheader className={classes.listSubheader}>
        <TextField
          size="small"
          autoFocus
          placeholder="Type to search..."
          fullWidth
          InputProps={{
            startAdornment: (
              <SearchIcon />
            ),
          }}
          value={searchText}
          onChange={(e) => handleSetSearchText(e)}
          onKeyDown={(e) => {
            if (e.key !== 'Escape') {
              e.stopPropagation();
            }
          }}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          className={classes.search}
        />
      </ListSubheader>
      {displayedOptions.map((option) => (
        <MenuItem key={option.address} value={option.name} className={classes.listItemWrapper}>
          <Box className={classes.listItem}>
            <img className={classes.tokenIcon} src={option.icon} alt={option.name} />
            <span>{option.label}</span>
          </Box>
        </MenuItem>
      ))}
    </Select>
  );
};
