import React, { FC, useEffect } from 'react';
import { Header, Grid } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { ForecastCard } from './forecastCard';
import { fetchForecast } from '../stores/forecast';
import { Store } from '../interface';

export const Forecast: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchForecast());
  }, [dispatch]);
  const forecasts = useSelector((store: Store) => store.forecasts);

  return (
    <>
      <Header>Forecast</Header>
      <Grid columns="equal">
        {Object.entries(forecasts).map(([city, forecast]) => {
          return (
            <Grid.Column width={8}>
              <ForecastCard key={forecast.id} city={city} forecast={forecast} />
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  );
};
