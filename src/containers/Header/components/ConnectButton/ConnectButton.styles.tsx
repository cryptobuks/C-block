import { makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import { FontWeights } from 'theme/Typography';

import { getFormatMedia } from 'theme/utils';

export const useStyles = makeStyles((theme: Theme) => {
  const formatMedia = getFormatMedia(theme);

  return createStyles({
    root: {
      width: '100%',
      [formatMedia.BREAKPOINT_TABLET]: {
      },
    },
    connectButton: {
      width: '100%',
      fontSize: '14px !important',
      lineHeight: '22px',
      fontWeight: FontWeights.fontWeightMedium,
    },
  });
});
