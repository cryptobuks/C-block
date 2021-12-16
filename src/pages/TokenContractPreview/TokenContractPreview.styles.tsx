import { makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import { COLOR_BLACK_3, COLOR_GREY_2 } from 'theme/colors';
import { flexHelper } from 'utils';

export const useStyles = makeStyles((theme: Theme) => createStyles({
  tokenContractInfoBlock: {
    padding: `${theme.spacing(4)}px 0`,
    borderBottom: `1px solid ${theme.palette.type === 'dark' ? COLOR_BLACK_3 : COLOR_GREY_2}`,
  },
  previewValueBlock: {
    ...flexHelper('flex-start', 'flex-start'),
    flexDirection: 'column',
  },
  previewLabel: {
    marginBottom: theme.spacing(2),
  },
}));
