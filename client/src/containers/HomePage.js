import React from 'react';
import { Container } from 'semantic-ui-react';
import UserComponent from '../components/UserComponent';
import greeting from '../helpers/greeting';

const HomePage = () => (
  (
    <Container>
      <h1>Home page</h1> 
      <span>
        {
          greeting('Chris')
        }
        <UserComponent />
      </span>
    </Container>
  )
);

export default HomePage;
