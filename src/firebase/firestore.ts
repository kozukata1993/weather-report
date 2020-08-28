import { firestore } from './index';
import { StoreForecast } from '../interface';

export const getForecast = async (city: string): Promise<StoreForecast> => {
  const forecasts = await firestore()
    .collection('cities')
    .doc(`${city}`)
    .collection('forecast')
    .orderBy('date', 'desc')
    .limit(1)
    .get()
    .catch((error) => {
      console.log(error);
    });

  const latestForecast = forecasts
    ? forecasts.docs.map((forecast) => ({
        id: forecast.id,
        date: forecast.data().date.toDate(),
        summary: forecast.data().summary,
        temperatureMax: forecast.data().temperatureMax,
        temperatureMin: forecast.data().temperatureMin,
        icon: forecast.data().icon,
      }))[0]
    : {
        id: '0',
        date: new Date(),
        summary: 'ERROR',
        temperatureMax: 0,
        temperatureMin: 0,
        icon: 'question',
      };

  return latestForecast;
};
