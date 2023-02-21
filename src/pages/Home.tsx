import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import URLConfig from '@Config/urls.config';

const Home: React.FC = () => {

  return <>
    <HelmetProvider>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      
      <h1>Welcome</h1>

      <Link to={URLConfig.POKEMON_LIST}>
        <button>Display Pockemons :)</button>
      </Link>

    </HelmetProvider>
  </>;
}

export default Home;