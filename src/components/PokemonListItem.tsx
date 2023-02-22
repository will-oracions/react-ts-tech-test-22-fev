import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import URLConfig from '@Config/urls.config';
import { PokemonModel, PokemonModelType } from 'models/Pokemon';

type Props = {
    pokemon: PokemonModel;
};

const FIRE = 'feu';
const PLANTE  = 'plante';
const FISH = 'poisson';

const PokemonListItem: React.FC<Props> = ({ pokemon }) => {

    const displayPokemonTypes = () => pokemon.types.map((type: PokemonModelType, i: number) => 
        <Box key={i} bg={getTypeColor(type.name)} mx="2px" px="1rem" py="0.25px" color="white" w="fit-content" borderRadius="2px">{ type.name }</Box>
    );

    const getTypeColor = (type: string): string => {
        switch(type.toLocaleLowerCase()) {
            case FIRE:
                return 'orange.300';
            case PLANTE:
                return 'green.300';
            case FISH: 
                return 'blue.300';
            default:
                return 'purple.300';
        }
    }

    return <>
        <Box>
            <Link to={`${URLConfig.POKEMON_LIST}/${pokemon.id}`}>
                <Box w="205px" h="205px" borderRadius="4px" bg="gray.200">
                    <Image w="100%" h="100%" objectFit="contain" src="/assets/images/001.png" alt="pokemon avatar" />
                </Box>
            </Link>

            <Box>
                <Text mt="0.5rem" color="gray.400" fontWeight="extrabold">No. 000{pokemon.id}</Text>
                
                <Link to={`${URLConfig.POKEMON_LIST}/${pokemon.id}`}>
                    <Text fontSize="1.4rem" fontWeight="bold">{ pokemon.name }</Text>
                </Link>
            </Box>

            <Flex>{ displayPokemonTypes() }</Flex>
            
        </Box>
    </>;
}

export default PokemonListItem;