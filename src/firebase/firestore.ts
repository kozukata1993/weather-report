import { firestore } from './index';

export const getForecasts = async (): Promise<string> => {
  console.log('hello');
  const forecasts = (await firestore().collection('tokyo').get()).docs;

  return forecasts[0].data().summary;
};
