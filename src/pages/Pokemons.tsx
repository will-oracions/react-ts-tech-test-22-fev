import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import * as Components from '@Components/index';
import PokemonsAPI from '@Api/pokemons.api';
import { useQuery } from '@tanstack/react-query';
import { AppLoader } from '@Shared/index';
import Constants from '@Config/contants.config';
import { Box, Heading } from '@chakra-ui/react';
import AppContainer from '@Shared/components/AppContainer';


const Pokemons: React.FC = () => {
    const { isLoading, isError, data: pokemons }  = useQuery({
        queryKey: [Constants.POKEMON_API_CACHE_KEY], 
        queryFn: PokemonsAPI.findAllPokemons,
    });

    if (isLoading) return <AppLoader />
    if (isError || !pokemons) return <div>Error</div>;
        
    return <>
        <HelmetProvider>
            <Box>
                <Helmet>
                    <title>Pockemons List</title>
                </Helmet>

                <AppContainer>
                    <Box bg="white" w="875px" minH="400px" mx="auto" boxShadow="sm" borderRadius="4px" p="1rem" mt="2rem">
                        <Heading color="tomato">List of Pokemons ({pokemons.length})</Heading>
                        <Components.PokemonList pokemons={pokemons} />
                    </Box>
                </AppContainer>

            </Box>
        </HelmetProvider>
    </>;
}

export default Pokemons;