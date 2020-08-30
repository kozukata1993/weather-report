// import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import axios from 'axios';
// import { getForecast } from './forecast';
import { notice } from './noticeAt6';

admin.initializeApp();
// export const testFunc = functions
//   .region('asia-northeast1')
//   .https.onRequest(async (request, response) => {
//     console.log('--------- START ---------');
//     const forecasts = [
//       await getForecast('tokyo'),
//       await getForecast('osaka'),
//       await getForecast('nagoya'),
//       await getForecast('morioka'),
//     ];
//     const cities = ['tokyo', 'osaka', 'nagoya', 'morioka'];

//     const querySnapshot = await admin.firestore().collection('users').get();

//     const uids = querySnapshot.docs.map((doc) => doc.data().uid);
//     console.log('userIds: ', uids);

//     uids.forEach(async (uid) => {
//       const notices = await admin
//         .firestore()
//         .collection('users')
//         .doc(uid)
//         .collection('notice')
//         .get();

//       const targetNotices = notices.docs
//         .filter((notice) => notice.data().time === 6)
//         .map((notice) => {
//           const { summary, temperatureMax, temperatureMin } = forecasts[
//             cities.indexOf(notice.data().city)
//           ];
//           console.log(notice.data().city);
//           return {
//             city: notice.data().city,
//             webhookUrl: notice.data().webhookUrl,
//             summary,
//             temperatureMax,
//             temperatureMin,
//           };
//         });

//       console.log(targetNotices);

//       if (targetNotices.length !== 0) {
//         console.log('--------- axios START ---------');
//         targetNotices.forEach(
//           async ({ city, webhookUrl, summary, temperatureMax, temperatureMin }) => {
//             const cityName = ['東京都', '大阪市', '名古屋市', '盛岡市'][cities.indexOf(city)];
//             const text = `${cityName}の天気, ${summary}, 最高気温は${temperatureMax}℃, 最低気温は${temperatureMin}℃`;
//             await axios.post(webhookUrl, JSON.stringify({ text })).catch((error) => {
//               console.log(error);
//             });
//           },
//         );
//       }
//     });
//     console.log('--------- FINISH ---------');

//     response.send('Finish');
//   });

export { forecast } from './forecast';
export { onCreateUser, onDeleteUser } from './auth';
export const noticeAt6 = notice('06', 6);
export const noticeAt7 = notice('07', 7);
export const noticeAt8 = notice('08', 8);
