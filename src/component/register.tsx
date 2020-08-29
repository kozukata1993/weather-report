import React from 'react';
import { Header, Button } from 'semantic-ui-react';
import { useMessage } from '../customHooks/useMessage';

export const Register: React.FC = () => {
  const displayMessage = useMessage();

  return (
    <>
      <Header>Register</Header>
      <Button content="Click here" onClick={() => displayMessage('Hooooooooooooo!!')} />
    </>
  );
};
