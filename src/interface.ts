export interface Store {
  counter: {
    count: number;
  };
  forecasts: StoreForecasts;
}

export interface StoreForecasts {
  tokyo: Forecast;
  osaka: Forecast;
  nagoya: Forecast;
  morioka: Forecast;
}

export interface Forecast {
  date: Date;
  summary: string;
  temperatureMax: number;
  temperatureMin: number;
  icon: 'sun' | 'sun' | 'rain' | 'snowflake' | 'cloud' | 'question';
}
