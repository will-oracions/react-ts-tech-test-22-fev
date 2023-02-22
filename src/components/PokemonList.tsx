import React from 'react';
import * as Components from '@Components/index';
import { Box } from '@chakra-ui/react';

type Props = {
    pokemons: any[];
};

const PokemonList: React.FC<Props> = ({ pokemons }) => {
    const displayPockemons = () => pokemons.map((pokemon: any, i: number) => <Box key={i}>
        <Components.PokemonListItem pokemon={pokemon} />
    </Box>);

    return <>
        <Box w="100%" display="flex" justifyContent="center" flexWrap="wrap">
            {displayPockemons()}
        </Box>
    </>;
}

export default PokemonList;