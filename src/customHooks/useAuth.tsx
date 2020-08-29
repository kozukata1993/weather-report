import React from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebase/index';

export const useAuth = (): firebase.User | null => {
  const [currentUser, setCurrentUser] = React.useState<firebase.User | null>(null);
  React.useEffect(() => {
    auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, [currentUser]);

  return currentUser;
};
