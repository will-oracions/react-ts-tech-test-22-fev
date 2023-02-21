import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PokemonDetails: React.FC = () => {
    return <>
        <HelmetProvider>
            <Helmet>
                <title>Pockemon name Details</title>
            </Helmet>

            <div>
                Pockemon Details
            </div>

        </HelmetProvider>
    </>;
}

export default PokemonDetails;