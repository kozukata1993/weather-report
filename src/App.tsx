import React, { FC, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { auth } from './firebase/index';
import { Register } from './component/register';
import { Forecast } from './component/forecast';
import { Layout } from './component/layout';

const App: FC = () => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  useEffect(() => {
    console.log('Hello');
    auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    console.log(currentUser);
  }, [currentUser]);

  return (
    <Layout>
      <Register />
      <Forecast />
    </Layout>
  );
};

export default App;
