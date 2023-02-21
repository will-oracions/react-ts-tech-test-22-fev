import EnvConfig from '@Config/env.config';
import URLConfig from '@Config/urls.config';
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return <>
    <div>{EnvConfig.APP_NAME}</div>

    <nav>
      <ul>
        <li>
          <Link to={URLConfig.HOME}>Home</Link>
          <Link to={URLConfig.POKEMON_LIST}>Pokemons</Link>
        </li>
      </ul>
    </nav>
  </>;
}

export default Header;