export interface Store {
  counter: {
    count: number;
  };
  forecast: {
    date: Date;
    summary: string;
    temperatureMax: number;
    temperatureMin: number;
    icon: 'sun' | 'sun' | 'rain' | 'snowflake' | 'cloud' | 'question';
  };
}

export interface Forecast {
  date: Date;
  summary: string;
  temperatureMax: number;
  temperatureMin: number;
  icon: 'sun' | 'sun' | 'rain' | 'snowflake' | 'cloud' | 'question';
}
