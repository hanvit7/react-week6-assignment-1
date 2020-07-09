import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';

import RESTAURANT from '../fixtures/restaurant';

describe('RestaurantContainer', () => {
  it('레스토랑 정보를 보여준다.', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurant: RESTAURANT,
      loading: false,
    }));

    const { container } = render((
      <MemoryRouter>
        <RestaurantContainer />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent(RESTAURANT.name);
  });

  it('loading이 true이면 로딩 페이지를 보여준다.', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurant: RESTAURANT,
      loading: true,
    }));

    const { container } = render((
      <MemoryRouter>
        <RestaurantContainer />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('Loading...');
  });
});
