import React from 'react';
import { useDispatch } from 'react-redux';
import firebase from 'firebase/app';
import { auth } from '../firebase/index';
import { loading, loaded } from '../stores/loading';

export const useAuth = (): firebase.User | null => {
  const [currentUser, setCurrentUser] = React.useState<firebase.User | null>(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loading());
    auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      dispatch(loaded());
    });
  }, [currentUser, dispatch]);

  return currentUser;
};
