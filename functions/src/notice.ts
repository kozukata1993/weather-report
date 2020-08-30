import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as axios from 'axios';
import { getForecast } from './forecast';

export const notice = (hour: string, num: number) =>
  functions
    .region('asia-northeast1')
    .pubsub.schedule(`0 ${hour} * * *`)
    .timeZone('Asia/Tokyo')
    .onRun(async () => {
      const forecasts = [
        await getForecast('tokyo'),
        await getForecast('osaka'),
        await getForecast('nagoya'),
        await getForecast('morioka'),
      ];
      const cities = ['tokyo', 'osaka', 'nagoya', 'morioka'];
      const querySnapshot = await admin.firestore().collection('users').get();
      const uids = querySnapshot.docs.map((doc) => doc.data().uid);

      uids.forEach(async (uid) => {
        const notices = await admin
          .firestore()
          .collection('users')
          .doc(uid)
          .collection('notice')
          .get();

        const targetNotices = notices.docs
          .filter((notice) => notice.data().time === num)
          .map((notice) => {
            const { summary, temperatureMax, temperatureMin } = forecasts[
              cities.indexOf(notice.data().city)
            ];
            console.log(notice.data().city);
            return {
              city: notice.data().city,
              webhookUrl: notice.data().webhookUrl,
              summary,
              temperatureMax,
              temperatureMin,
            };
          });

        console.log(targetNotices);

        if (targetNotices.length !== 0) {
          targetNotices.forEach(
            async ({ city, webhookUrl, summary, temperatureMax, temperatureMin }) => {
              const cityName = ['東京都', '大阪市', '名古屋市', '盛岡市'][cities.indexOf(city)];
              const text = `${cityName}の天気, ${summary}, 最高気温は${temperatureMax}℃, 最低気温は${temperatureMin}℃`;
              await axios.default.post(webhookUrl, JSON.stringify({ text })).catch((error) => {
                console.log(error);
              });
            },
          );
        }
      });
    });
