/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Link, Typography } from '@material-ui/core';

export default {
  title: 'theme/Typography',
  component: Typography,
};

export const Default: React.FC = () => (
  <>
    <div>
      <Typography variant="h1">H1 heading</Typography>
      <Typography variant="h2">H2 heading</Typography>
      <Typography variant="h3">H3 heading</Typography>
      <Typography variant="h4">H4 heading</Typography>
      <Typography variant="h5">H5 heading</Typography>
      <Typography variant="h6">H5 heading alternative</Typography>
    </div>

    <Typography variant="button" display="block">
      Button
    </Typography>

    <Typography variant="body1" className="price" display="block">
      Price $
    </Typography>

    <div>
      <Typography variant="body1" display="block">
        Body 1
      </Typography>
      <Typography variant="body1" display="block">
        <strong>Body 1 Bold</strong>
      </Typography>
      <Typography variant="body1" display="block">
        <Link>Body 1 Link</Link>
      </Typography>
    </div>
    <div>
      <Typography variant="body2" display="block">
        Body 2
      </Typography>
      <Typography variant="body2" display="block">
        <strong>Body 2 Bold</strong>
      </Typography>
      <Typography variant="body2" display="block">
        <strong>
          <Link>Body 2 Bold Link</Link>
        </strong>
      </Typography>
      <Typography variant="body2" display="block">
        <Link>Body 2 Link</Link>
      </Typography>
    </div>

    <Typography variant="caption" className="category" display="block">
      Categories
    </Typography>

    <div>
      <Typography variant="body1" className="articleLarge">
        Article body large
      </Typography>
      <Typography variant="body1" className="articleLargeBold">
        Article body large bold
      </Typography>
      <Typography variant="body1" className="articleLargeLink">
        Article body large link
      </Typography>
      <Typography variant="body1" className="articleSmall">
        Article body small
      </Typography>
      <Typography variant="body1" className="articleSmallBold">
        Article body small bold
      </Typography>
      <Typography variant="body1" className="articleSmallLink">
        Article body small link
      </Typography>
    </div>
  </>
);
