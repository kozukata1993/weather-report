import React from 'react';
import { Card, Icon, Segment } from 'semantic-ui-react';
import { StoreForecast } from '../interface';

interface ForecastCardProps {
  city: string;
  forecast: StoreForecast;
}

export const ForecastCard: React.FC<ForecastCardProps> = ({ city, forecast }) => {
  const captitalizeFirstLetter = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <Card.Group>
      <Card fluid>
        <Card.Content>
          <Card.Header data-testid="cardHeader">{captitalizeFirstLetter(city)}</Card.Header>
          <Icon name={forecast.icon} />
          <Card.Description data-testid="cardDescription" content={forecast.summary} />
          <Segment.Group horizontal data-testid="temperature">
            <Segment color="red" content={`最高気温: ${forecast.temperatureMax}℃`} />
            <Segment color="blue" content={`最低気温: ${forecast.temperatureMin}℃`} />
          </Segment.Group>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};
