import PokemonsAPI from '@Api/pokemons.api';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import AppContainer from '@Shared/components/AppContainer';
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
                <title> | Details</title>
            </Helmet>

            <AppContainer>
                <Box bg="white" w="100%" maxW="875px" minH="400px" mx="auto" boxShadow="sm" borderRadius="4px" p="1rem" mt="2rem">
                    
                    <Flex my="1rem" fontSize="2rem" textAlign="center" justifyContent="center">
                        <Heading mb="1rem">{ pokemon.name }</Heading>
                        <Text>&nbsp;No. 000{pokemon.id}</Text>
                    </Flex>

                    <Flex w="100%" direction={{ base: 'column', md: 'row' }}>
                        <Box w="100%" maxW="430px" min-h="430px" borderRadius="4px" bg="gray.200">
                            <Image w="100%" h="100%" objectFit="contain" src={ pokemon.image || "/assets/images/001.png" } alt="pokemon avatar" />
                        </Box>

                        <Box ml="1rem">
                            <Text fontSize="18px" fontWeight="medium" mb="2rem" mt={{ base: '1rem', md: '0' }}>Il y a une graine sur son dos depuis sa naissance. Elle grossit un peu chaque jour.</Text>

                            <Box fontSize="18px" p="1rem" display="flex" flexWrap="wrap" alignItems="flex-start" w="100%" maxW="429px" mx="auto" h="243px" bg="blue.300" borderRadius="2xl">
                                <Box w="50%">
                                    <Text color="white">Taille</Text>
                                    <Text>0,7 m</Text>
                                </Box>

                                <Box w="50%">
                                    <Text color="white">Categorie</Text>
                                    <Text>Graine</Text>
                                </Box>
                                <Box w="50%">
                                    <Text color="white">Poids</Text>
                                    <Text>6,9 kg</Text>
                                </Box>
                                <Box w="50%">
                                    <Text color="white">Talent</Text>
                                    <Text>Anglais</Text>
                                </Box>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
            </AppContainer>

        </HelmetProvider>
    </>;
}

export default PokemonDetails;