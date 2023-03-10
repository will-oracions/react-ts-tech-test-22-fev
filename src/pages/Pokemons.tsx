import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import * as Components from '@Components/index';
import PokemonsAPI from '@Api/pokemons.api';
import { useQuery } from '@tanstack/react-query';
import Constants from '@Config/contants.config';
import { Box, Heading } from '@chakra-ui/react';
import AppContainer from '@Shared/components/AppContainer';
import Loading from './Loading';


const Pokemons: React.FC = () => {
    const { isLoading, isError, data: pokemons }  = useQuery({
        queryKey: [Constants.POKEMON_API_CACHE_KEY], 
        queryFn: PokemonsAPI.findAllPokemons,
    });

    if (isLoading) return <Loading />
    if (isError || !pokemons) return <Box color="red.400">Error: Cannot get pokemons list :(</Box>;
    // const [pokemons, setPokemons] = React.useState([]);
    // React.useEffect(() => {
    //     (async () => {
    //         const pokemons = await PokemonsAPI.findAllPokemons();
    //         console.log('PPP: ', pokemons);

    //         setPokemons(pokemons);
    //     })();
    // }, []);

    return <>
        <HelmetProvider>
            <Box>
                <Helmet>
                    <title>Pockemons List</title>
                </Helmet>

                <AppContainer>
                    <Box bg="white" w="100%" maxW="900px" minH="400px" mx="auto" boxShadow="sm" borderRadius="4px" p="1rem" mt="2rem">
                        <Heading color="tomato" fontSize="1.4rem" mb="1rem">List of Pokemons ({pokemons.length})</Heading>
                        <Components.PokemonList pokemons={pokemons} />
                    </Box>
                </AppContainer>

            </Box>
        </HelmetProvider>
    </>;
}

export default Pokemons;