import PokemonsAPI from '@Api/pokemons.api';
import { AppLoader } from '@Shared/index';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const PokemonDetails: React.FC = () => {
    const params = useParams();

    const { isLoading, isError, data: pokemon }  = useQuery({
        queryKey: [],
        queryFn: PokemonsAPI.findByPokemonId(Number(params.id)),
    });

    if (isLoading) return <AppLoader />
    if (isError) return <div>Error: Cannot get pokemon details</div>;


    return <>
        <HelmetProvider>
            <Helmet>
                <title>{ pokemon.name } | Details</title>
            </Helmet>

            <div>
                { pokemon.name } Details
            </div>

        </HelmetProvider>
    </>;
}

export default PokemonDetails;