import React, { FC } from 'react';
import { Container } from 'semantic-ui-react';
import { Register } from './component/register';
import { Layout } from './component/layout';

const App: FC = () => {
  return (
    <Layout>
      <Register />
    </Layout>
  );
};

export default App;
