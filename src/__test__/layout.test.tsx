import React from 'react';
import { render, cleanup, screen } from './test-utils';
import { Layout } from '../container/layout';
import { Forecast } from '../components/forecast';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('first test', () => {
  it('render children', () => {
    render(
      <Layout>
        <Forecast />
      </Layout>,
    );

    screen.debug();
    ['Tokyo', 'Osaka', 'Nagoya', 'Morioka'].forEach((city, i) => {
      expect(screen.getAllByTestId('cardHeader')[i]).toHaveTextContent(city);
    });
  });
});
