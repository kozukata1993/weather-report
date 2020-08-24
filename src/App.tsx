import React, { FC } from 'react';
import { Container } from 'semantic-ui-react';
import { Register } from './component/register';

const App: FC = () => {
  return (
    <Container>
      <h1>Hello React!</h1>
      <Register />
    </Container>
  );
};

export default App;
