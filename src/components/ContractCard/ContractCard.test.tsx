import React from 'react';

import { render } from '@testing-library/react';

import { ContractCard } from './ContractCard';
import { contractCardPropsMocked } from './ContractCard.mock';

describe('ContractCard', () => {
  it('should render', () => {
    const { container } = render(
      <ContractCard
        {...contractCardPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
