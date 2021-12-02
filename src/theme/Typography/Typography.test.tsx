import React from 'react';

import { Typography } from '@material-ui/core';
import { render } from '@testing-library/react';

import { ThemeProvider } from 'theme/testUtils';

describe('Typography', () => {
  it('should render', () => {
    const { container } = render(
      <ThemeProvider>
        <Typography>Text</Typography>
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
