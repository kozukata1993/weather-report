import React from 'react';
// import userEvent from '@testing-library/user-event';
// import { render, cleanup, screen } from '@testing-library/react';
import { render, cleanup, screen } from './test-utils';
import { ForecastCard } from '../component/forecastCard';
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
    screen.debug();
    expect(screen.getByText('sendai')).toBeInTheDocument();
    expect(screen.getByText('雨のち晴れ')).toBeInTheDocument();
    expect(screen.getByText('最高気温: 25℃')).toBeInTheDocument();
    expect(screen.getByText('最低気温: 15℃')).toBeInTheDocument();

    // expect(getByText('sendai')).toContainElement();
    // Warning: toBeInTheDOM has been deprecated and will be removed in future updates.
    // Please use toBeInTheDocument for searching the entire document and toContainElement for searching a specific container.
  });
});
