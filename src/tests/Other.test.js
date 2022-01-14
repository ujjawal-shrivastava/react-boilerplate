import '@testing-library/jest-dom';
import React from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import { Other } from '../pages';
import { MemoryRouter } from 'react-router';

const BASE_NAME = `/${process.env.REACT_APP_HASH}`;

const render = (ui, { route = '/', ...renderOptions } = {}) => {
  const Wrapper = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;
  window.history.pushState({}, 'Test page', BASE_NAME + route);
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

describe('Others Page', () => {
  test('Other Page Renders with Title', () => {
    render(<Other />);
    const title = screen.queryByText('Other Page');
    expect(title).toBeInTheDocument();
  });
});
