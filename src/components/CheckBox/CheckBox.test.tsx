import React from 'react';

import { render } from '@testing-library/react';

import { CheckBox } from './CheckBox';
import { checkBoxPropsMocked } from './CheckBox.mock';

describe('CheckBox', () => {
  it('should render', () => {
    const { container } = render(
      <CheckBox
        {...checkBoxPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
