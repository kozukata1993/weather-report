import { firestore } from './index';
import { Forecast } from '../interface';

export const getForecasts = async (city: string): Promise<Forecast[]> => {
  const forecasts = await firestore()
    .collection('cities')
    .doc(`${city}`)
    .collection('forecast')
    .orderBy('date', 'asc')
    .limit(4)
    .get()
    .catch((error) => {
      console.log(error);
    });

  return forecasts
    ? forecasts.docs.map((forecast) => ({
        date: forecast.data().date.toDate(),
        summary: forecast.data().summary,
        temperatureMax: forecast.data().temperatureMax,
        temperatureMin: forecast.data().temperatureMin,
        icon: forecast.data().icon,
      }))
    : [
        {
          date: new Date(),
          summary: 'ERROR',
          temperatureMax: 0,
          temperatureMin: 0,
          icon: 'question',
        },
      ];
};
