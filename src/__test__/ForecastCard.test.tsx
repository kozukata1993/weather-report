import React from 'react';
import { render, cleanup, screen } from './test-utils';
import { ForecastCard } from '../components/forecastCard';
import { StoreForecast } from '../interface';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('ForecastCard', () => {
  it('initialState', () => {
    const city = 'sendai';
    const forecast = {
      id: '0',
      date: new Date(),
      summary: '雨のち晴れ',
      temperatureMax: 25,
      temperatureMin: 15,
      icon: 'rain',
    } as StoreForecast;

    render(<ForecastCard city={city} forecast={forecast} />);
    expect(screen.getByTestId('cardHeader')).toContainElement(screen.getByText('Sendai'));
    expect(screen.getByTestId('cardDescription')).toContainElement(screen.getByText('雨のち晴れ'));
    expect(screen.getByTestId('temperature')).toContainElement(screen.getByText('最高気温: 25℃'));
    expect(screen.getByTestId('temperature')).toContainElement(screen.getByText('最低気温: 15℃'));

    // Warning: toBeInTheDOM has been deprecated and will be removed in future updates.
    // Please use toBeInTheDocument for searching the entire document and toContainElement for searching a specific container.
  });
});
