import React from 'react';
import { cleanup, render } from '@testing-library/react';

import SecondaryPage from '.';

afterEach(cleanup);

test('renders the component', () => {
  const { container } = render(<SecondaryPage />);

  expect(container).toMatchSnapshot();
});
