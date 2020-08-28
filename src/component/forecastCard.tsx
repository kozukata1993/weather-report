import React, { FC } from 'react';
import { Card, Icon, Segment } from 'semantic-ui-react';
import { StoreForecast } from '../interface';

interface ForecastCardProps {
  city: string;
  forecast: StoreForecast;
}

export const ForecastCard: FC<ForecastCardProps> = ({ city, forecast }) => {
  return (
    <Card.Group key={forecast.id}>
      <Card fluid>
        <Card.Content>
          <Card.Header>{city}</Card.Header>
          <Icon name={forecast.icon} />
          <Card.Description content={forecast.summary} />
          <Segment.Group horizontal>
            <Segment color="red" content={`最高気温: ${forecast.temperatureMax}℃`} />
            <Segment color="blue" content={`最低気温: ${forecast.temperatureMin}℃`} />
          </Segment.Group>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};
