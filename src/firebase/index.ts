import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/firebase-storage';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'weather-report-cb601.firebaseapp.com',
  projectId: 'weather-report-cb601',
  appID: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(config);
export const { auth, firestore, functions } = firebase;
