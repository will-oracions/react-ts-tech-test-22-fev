import React from 'react';
import * as Components from '@Components/index';

type Props = {
    pokemons: any[];
};

const PokemonList: React.FC<Props> = ({ pokemons }) => {
    const displayPockemons = () => pokemons.map((pokemon: any, i: number) => <div key={i}>
        <Components.PokemonListItem pokemon={pokemon} />
    </div>);

    return <>
        <div>
            {displayPockemons()}
        </div>
    </>;
}

export default PokemonList;