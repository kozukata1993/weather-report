import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, cleanup, screen } from './test-utils';
import { Counter } from '../component/counter';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('Counter', () => {
  it('increment', () => {
    render(<Counter />);
    userEvent.click(screen.getByText('+'));
    expect(screen.getByTestId('count')).toHaveTextContent('1');
  });

  it('decrement', () => {
    render(<Counter />);
    userEvent.click(screen.getByText('-'));
    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });
});
