import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import * as Components from '@Components/index';

const Home: React.FC = () => {

  return <>
    <HelmetProvider>
        <Helmet>
          <title>Home page</title>
        </Helmet>
        
        <h1>Home page</h1>
      
    </HelmetProvider>
  </>;
}

export default Home;