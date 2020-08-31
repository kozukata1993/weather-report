import React from 'react';
import { useDispatch } from 'react-redux';
import firebase from 'firebase/app';
import { auth, firestore } from '../firebase/index';
import { loading, loaded } from '../stores/loading';
import { fetchNotices, resetNotices } from '../stores/notice';

export const useAuth = (): firebase.User | null => {
  const [currentUser, setCurrentUser] = React.useState<firebase.User | null>(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loading());
    auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      dispatch(loaded());
    });

    if (currentUser) {
      firestore()
        .collection('users')
        .doc(currentUser.uid)
        .collection('notice')
        .onSnapshot(() => {
          dispatch(fetchNotices());
        });
    } else {
      dispatch(resetNotices());
    }
  }, [currentUser, dispatch]);

  return currentUser;
};
