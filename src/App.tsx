import React, { FC } from 'react';
import { Register } from './component/register';
// import { Counter } from './component/counter';
import { Forecast } from './component/forecast';
import { Layout } from './component/layout';

const App: FC = () => {
  return (
    <Layout>
      <Register />
      {/* <Counter /> */}
      <Forecast />
    </Layout>
  );
};

export default App;
