/* eslint-disable */

import React, {
  ChangeEvent, FC, useMemo, useState,
} from 'react';
import {
  Box, ListSubheader, TextField, MenuItem, Select,
} from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from './TokenSelect.styles';
import { SelectInput } from './SelectInput';
import {ArrowDropdown, SearchIcon} from 'theme/icons';

interface ITokenSelectProps {
  className?: string;
}

const allOptions = ['Option One', 'Option Two', 'Option Three', 'Option Four'];

export const TokenSelect: FC<ITokenSelectProps> = ({
  className,
}) => {
  const classes = useStyles();

  const [selectedOption, setSelectedOption] = useState('');

  const [searchText, setSearchText] = useState<string>('');

  const containsText = (text, searchText) => text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

  const displayedOptions = useMemo(
    () => allOptions.filter((option) => containsText(option, searchText)),
    [searchText],
  );
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const handleSetOption = (e: ChangeEvent<any>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <Select
      MenuProps={{
        autoFocus: false,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right'
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        getContentAnchorEl: null
      }}
      labelId="search-select-label"
      id="search-select"
      value={selectedOption}
      // @ts-ignore
      onChange={(e) => setSelectedOption(e.target.value)}
      onClose={() => setSearchText('')}
      renderValue={selectedOption !== '' ? undefined : () => <Box>Token</Box>}
      displayEmpty
      IconComponent={() => (
        <ArrowDropdown />
      )}
      input={<SelectInput />}
      classes={{
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
          defaultValue={''}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key !== 'Escape') {
              e.stopPropagation();
            }
          }}
          className={classes.search}
        />
      </ListSubheader>
      {displayedOptions.map((option, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <MenuItem key={i} value={option}>
          <Box className={classes.listItem}>{option}</Box>
        </MenuItem>
      ))}
    </Select>
  );
};
