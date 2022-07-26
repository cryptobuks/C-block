import React, {
  FC, useRef, useState, ChangeEvent, useEffect,
} from 'react';
import {
  Grid,
  Box,
  Typography,
  Button,
  TextField,
  Switch,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

import { SearchIcon } from 'theme/icons';
import { Permissions } from 'types/store/user';
import adminSelectors from 'store/admin/selectors';
import { useShallowSelector } from 'hooks';
import { maxRows } from '../AdminPanel.helpers';
import { useStyles } from './UsersView.styles';
import { CollapsibleList } from './CollapsibleList';

type Props = {
  permissions: Permissions;
};

const defaultPage = 1;

export const UsersView: FC<Props> = ({ permissions }) => {
  const searchTextRef = useRef<HTMLInputElement>();

  const [selectedOnlyAdmins, setSelectedOnlyAdmins] = useState(false);
  const [searchText, setSearchText] = useState(''); // to store text that changes only when user presses Search button
  const [page, setPage] = useState(defaultPage);

  const handleAdminsSwitch = () => {
    setSelectedOnlyAdmins((prevState) => !prevState);
  };

  const handleSearch = () => {
    setSearchText(searchTextRef.current.value);
  };
  const handleSearchTextChange = () => {
    if (!searchTextRef.current.value) {
      setSearchText('');
    }
  };

  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  const rows = useShallowSelector(
    adminSelectors.selectUsers(searchText, selectedOnlyAdmins),
  );

  useEffect(() => {
    setPage(defaultPage);
  }, [selectedOnlyAdmins, searchText]);

  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} md={8} className={classes.searchContainer}>
        <TextField
          inputRef={searchTextRef}
          id="input-with-icon-textfield"
          placeholder="Wallet address/email/name"
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
          onChange={handleSearchTextChange}
          className={classes.searchContainerField}
        />
        <Button
          size="large"
          variant="outlined"
          onClick={handleSearch}
        >
          Search
        </Button>
      </Grid>
      {
        permissions.superAdmin && (
          <Grid item xs={12}>
            <Box className={classes.adminsSwitch}>
              <Switch name="Admins" checked={selectedOnlyAdmins} onClick={handleAdminsSwitch} />
              <Typography>Admins</Typography>
            </Box>
          </Grid>
        )
      }
      <Grid item container xs={12} className={classes.collapsibleList}>
        <CollapsibleList permissions={permissions} rows={rows} currentPage={page} maxRows={maxRows} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Pagination
          className={classes.pagination}
          page={page}
          count={Math.ceil(rows.length / maxRows)}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
        />
      </Grid>
    </Grid>
  );
};
