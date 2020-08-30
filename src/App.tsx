import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import { Register } from './container/register';
import { Forecast } from './component/forecast';
import { Layout } from './container/layout';
import { useAuth } from './customHooks/useAuth';

const App: React.FC = () => {
  const currentUser = useAuth();

  return (
    <Layout>
      <Helmet>
        <title>Weather Report</title>
      </Helmet>
      {currentUser ? (
        <Grid columns={2}>
          <Grid.Column width={10}>
            <Forecast />
          </Grid.Column>
          <Grid.Column width={6}>
            <Register />
          </Grid.Column>
        </Grid>
      ) : (
        <Forecast />
      )}
    </Layout>
  );
};

export default App;
