import React from 'react';

import { TextField } from '@material-ui/core';
import { render } from '@testing-library/react';

import { ThemeProvider } from 'theme/testUtils';

describe('TextField', () => {
  it('should render', () => {
    const { container } = render(
      <ThemeProvider>
        <TextField
          value="Value"
          placeholder="Placeholder"
          label="Label"
          helperText="Helper text"
          error
        />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
