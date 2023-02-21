import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import * as Components from '@Components/index';

const Pokemons: React.FC = () => {
    return <>
        <HelmetProvider>
            <Helmet>
                <title>Pockemon list</title>
            </Helmet>

            <div>
                <h1>List of Pokemons</h1>
                <Components.PokemonList />
            </div>

        </HelmetProvider>
    </>;
}

export default Pokemons;