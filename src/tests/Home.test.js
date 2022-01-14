import '@testing-library/jest-dom';
import React from 'react';
import { render as rtlRender, fireEvent, screen } from '@testing-library/react';
import { Home } from '../pages';
import { MemoryRouter } from 'react-router';

const BASE_NAME = `/${process.env.REACT_APP_HASH}`;

const render = (ui, { route = '/', ...renderOptions } = {}) => {
  const Wrapper = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;
  window.history.pushState({}, 'Test page', BASE_NAME + route);
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

describe('Home Page', () => {
  test('Home Page Renders with Title at /', () => {
    render(<Home />);
    const title = screen.queryByText('Home Page');
    expect(title).toBeInTheDocument();
  });

  test('Home Page has a working counter', () => {
    render(<Home />);
    const counter = screen.queryByTestId('counter');
    expect(counter).toBeInTheDocument();
    const plusButton = screen.queryByText('+');
    expect(plusButton).toBeInTheDocument();
    const minusButton = screen.queryByText('-');
    expect(minusButton).toBeInTheDocument();
    fireEvent.click(plusButton);
    expect(counter).toHaveTextContent(1);
    fireEvent.click(minusButton);
    expect(counter).toHaveTextContent(0);
  });
});
