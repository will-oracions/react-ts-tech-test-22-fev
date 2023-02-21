import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import * as Components from '@Components/index';
import PokemonsAPI from '@Api/pokemons.api';
import { useQuery } from '@tanstack/react-query';
import { AppLoader } from '@Shared/index';
import Constants from '@Config/contants.config';


const Pokemons: React.FC = () => {
    const { isLoading, isError, data: pokemons }  = useQuery({
        queryKey: [Constants.POKEMON_API_CACHE_KEY], 
        queryFn: PokemonsAPI.findAllPokemons,
    });

    if (isLoading) return <AppLoader />
    if (isError || !pokemons) return <div>Error</div>;
        
    return <>
        <HelmetProvider>
            <Helmet>
                <title>Pockemon list</title>
            </Helmet>

            <div>
                <h1>List of Pokemons ({pokemons.length})</h1>
                <Components.PokemonList pokemons={pokemons} />
            </div>

        </HelmetProvider>
    </>;
}

export default Pokemons;