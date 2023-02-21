import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PokemonList: React.FC = () => {
    return <>
        <HelmetProvider>
            <Helmet>
                <title>Pockemon list</title>
            </Helmet>

            <div>
                Pockemon list
            </div>

        </HelmetProvider>
    </>;
}

export default PokemonList;