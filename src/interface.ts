export interface Store {
  counter: {
    count: number;
  };
  forecasts: StoreForecasts;
  message: StoreMessage;
  loading: {
    isLoading: boolean;
  };
  notices: StoreNotice[] | null;
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

export interface StoreMessage {
  visible: boolean;
  text: string;
  color:
    | 'red'
    | 'orange'
    | 'yellow'
    | 'olive'
    | 'green'
    | 'teal'
    | 'blue'
    | 'violet'
    | 'purple'
    | 'pink'
    | 'brown'
    | 'grey'
    | 'black'
    | undefined;
}

export interface StoreNotice {
  id: string;
  city: string;
  time: number;
  webhookUrl: string;
  createdAt: Date;
}
