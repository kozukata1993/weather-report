import { firestore, auth } from './index';
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

export const registerNotice = async (
  city: string,
  time: number,
  webhookUrl: string,
): Promise<void> => {
  console.log('START');
  const { currentUser } = auth();
  await firestore()
    .collection('users')
    .doc(`${currentUser?.uid}`)
    .collection('notice')
    .add({ createdAt: firestore.FieldValue.serverTimestamp(), city, time, webhookUrl })
    .catch((error) => {
      console.log(error);
    });
};

export const updateNotice = async (
  id: string,
  city: string,
  time: number,
  webhookUrl: string,
): Promise<void> => {
  const { currentUser } = auth();
  await firestore()
    .collection('users')
    .doc(`${currentUser?.uid}`)
    .collection('notice')
    .doc(id)
    .update({
      city,
      time,
      webhookUrl,
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteNotice = async (id: string): Promise<void> => {
  const { currentUser } = auth();
  await firestore()
    .collection('users')
    .doc(`${currentUser?.uid}`)
    .collection('notice')
    .doc(id)
    .delete()
    .catch((error) => {
      console.log(error);
    });
};
