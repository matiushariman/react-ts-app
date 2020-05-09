import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { cleanup, render, fireEvent } from '@testing-library/react';

import App from '.';

afterEach(cleanup);

test('renders the component', () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  expect(container).toMatchSnapshot();
});

test('render HomePage on the first load', () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  expect(container.innerHTML).toMatch('HomePage');
});

test('clicking on Link redirect to the correct page', () => {
  const { container, getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  fireEvent.click(getByText(/secondary/i));

  expect(container.innerHTML).toMatch('SecondaryPage');
});
