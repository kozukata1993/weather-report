export interface Store {
  counter: {
    count: number;
  };
  forecasts: StoreForecasts;
}

export interface StoreForecasts {
  tokyo: StoreForecast;
  osaka: StoreForecast;
  nagoya: StoreForecast;
  morioka: StoreForecast;
}

export interface StoreForecast {
  id: string;
  date: Date;
  summary: string;
  temperatureMax: number;
  temperatureMin: number;
  icon: 'sun' | 'sun' | 'rain' | 'snowflake' | 'cloud' | 'question';
}
