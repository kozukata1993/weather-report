// import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import axios from 'axios';
// import { getForecast } from './forecast';
import { notice } from './notice';

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
export const noticeAt0 = notice('00', 0);
export const noticeAt1 = notice('01', 1);
export const noticeAt2 = notice('02', 2);
export const noticeAt3 = notice('03', 3);
export const noticeAt4 = notice('04', 4);
export const noticeAt5 = notice('05', 5);
export const noticeAt6 = notice('06', 6);
export const noticeAt7 = notice('07', 7);
export const noticeAt8 = notice('08', 8);
export const noticeAt9 = notice('09', 9);
export const noticeAt10 = notice('10', 10);
export const noticeAt11 = notice('11', 11);
export const noticeAt12 = notice('12', 12);
export const noticeAt13 = notice('13', 13);
export const noticeAt14 = notice('14', 14);
export const noticeAt15 = notice('15', 15);
export const noticeAt16 = notice('16', 16);
export const noticeAt17 = notice('17', 17);
export const noticeAt18 = notice('18', 18);
export const noticeAt19 = notice('19', 19);
export const noticeAt20 = notice('20', 20);
export const noticeAt21 = notice('21', 21);
export const noticeAt22 = notice('22', 22);
export const noticeAt23 = notice('23', 23);
