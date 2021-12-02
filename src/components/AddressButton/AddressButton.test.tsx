import React from 'react';

import { render } from '@testing-library/react';

import { AddressButton } from './AddressButton';
import { addressButtonPropsMocked } from './AddressButton.mock';

describe('AddressButton', () => {
  it('should render', () => {
    const { container } = render(
      <AddressButton
        {...addressButtonPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
