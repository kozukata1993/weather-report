import React from 'react';
import { Register } from './component/register';
import { Forecast } from './component/forecast';
import { Layout } from './container/layout';

const App: React.FC = () => {
  return (
    <Layout>
      <Register />
      <Forecast />
    </Layout>
  );
};

export default App;
