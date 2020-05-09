import React from 'react';
import { cleanup, render } from '@testing-library/react';

import HomePage from '.';

afterEach(cleanup);

test('renders the component', () => {
  const { container } = render(<HomePage />);

  expect(container).toMatchSnapshot('SecondaryPage');
});
