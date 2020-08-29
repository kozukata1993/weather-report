import React from 'react';
import { Register } from './component/register';
import { Forecast } from './component/forecast';
import { Layout } from './component/layout';
import useAuth from './customHooks/useAuth';

const App: React.FC = () => {
  const currentUser = useAuth();
  console.log('App', currentUser);

  return (
    <Layout>
      <Register />
      <Forecast />
    </Layout>
  );
};

export default App;
