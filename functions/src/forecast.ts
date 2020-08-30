import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as axios from 'axios';
import { cities } from './cities';
import { generateIcon } from './utils';

export const forecast = functions
  .region('asia-northeast1')
  .pubsub.schedule('0 */3 * * *')
  .timeZone('Asia/Tokyo')
  .onRun(async (context) => {
    cities.forEach(async (city) => {
      const latitude = city.latitude;
      const longitude = city.longitude;
      const queryParams = '?lang=ja&units=si&exclude=currently,minutely,alerts,flags';
      const url = `${functions.config().darksky.url}${latitude},${longitude}${queryParams}`;

      const res = await axios.default.get(url).catch((error) => {
        console.log(error);
      });

      if (res) {
        const icon = generateIcon(res.data.hourly.icon);
        await admin
          .firestore()
          .collection('cities')
          .doc(`${city.name}`)
          .collection('forecast')
          .add({
            date: admin.firestore.FieldValue.serverTimestamp(),
            summary: res.data.hourly.summary,
            temperatureMax: res.data.daily.data[0].temperatureMax,
            temperatureMin: res.data.daily.data[0].temperatureMin,
            icon: icon,
          });
      }
    });
  });

export const getForecast = async (city: string) => {
  const forecasts = await admin
    .firestore()
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
        summary: forecast.data().summary,
        temperatureMax: forecast.data().temperatureMax,
        temperatureMin: forecast.data().temperatureMin,
      }))[0]
    : {
        summary: 'ERROR',
        temperatureMax: 0,
        temperatureMin: 0,
      };

  return latestForecast;
};
