import React from 'react';

import { render } from '@testing-library/react';

import { ConnectButton } from './ConnectButton';
import { connectButtonPropsMocked } from './ConnectButton.mock';

describe('ConnectButton', () => {
  it('should render', () => {
    const { container } = render(
      <ConnectButton
        {...connectButtonPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
