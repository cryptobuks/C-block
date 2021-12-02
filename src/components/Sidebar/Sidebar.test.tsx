import React from 'react';

import { render } from '@testing-library/react';

import { Sidebar } from './Sidebar';
import { sidebarPropsMocked } from './Sidebar.mock';

describe('Sidebar', () => {
  it('should render', () => {
    const { container } = render(
      <Sidebar
        {...sidebarPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
