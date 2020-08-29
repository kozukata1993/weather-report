import React from 'react';
import { render, cleanup, screen } from './test-utils';
import { Forecast } from '../component/forecast';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('Forecast', () => {
  it('Rendering', async () => {
    render(<Forecast />);
    expect(screen.getByTestId('tokyo')).toContainElement(screen.getByText('Tokyo'));
    expect(screen.getByTestId('osaka')).toContainElement(screen.getByText('Osaka'));
    expect(screen.getByTestId('nagoya')).toContainElement(screen.getByText('Nagoya'));
    expect(screen.getByTestId('morioka')).toContainElement(screen.getByText('Morioka'));
  });
});
