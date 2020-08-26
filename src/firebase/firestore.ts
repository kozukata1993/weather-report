import { firestore } from './index';
import { Forecast } from '../interface';

export const getForecasts = async (city: string): Promise<Forecast> => {
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
        date: forecast.data().date.toDate(),
        summary: forecast.data().summary,
        temperatureMax: forecast.data().temperatureMax,
        temperatureMin: forecast.data().temperatureMin,
        icon: forecast.data().icon,
      }))[0]
    : {
        date: new Date(),
        summary: 'ERROR',
        temperatureMax: 0,
        temperatureMin: 0,
        icon: 'question',
      };

  return latestForecast;
};
