import React, { FC } from 'react';
import { Header, Button } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchForecast } from '../stores/forecast';
import { Store } from '../interface';

export const Forecast: FC = () => {
  const forecasts = useSelector((store: Store) => store.forecasts);
  const dispatch = useDispatch();

  const handleClick = async () => {
    console.log('start');
    dispatch(fetchForecast());
    console.log(forecasts);
  };

  return (
    <>
      <Header>Forecast</Header>
      <Button color="instagram" content="Get Forecast" onClick={handleClick} />
    </>
  );
};
