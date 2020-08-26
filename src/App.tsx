import React, { FC } from 'react';
import { Register } from './component/register';
import { Counter } from './component/counter';
import { Layout } from './component/layout';

const App: FC = () => {
  return (
    <Layout>
      <Register />
      <Counter />
    </Layout>
  );
};

export default App;
