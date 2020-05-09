import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import Heading from '.';

test('renders the component', () => {
  const { container } = render(<Heading />);

  expect(container).toMatchSnapshot();
});
