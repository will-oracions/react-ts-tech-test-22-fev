import React from 'react';
import * as Components from '@Components/index'
const PokemonList: React.FC = () => {
    const pokemons: any = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        }
    ];

    const displayPockemons = () => pokemons.map((pokemon: any) => <div>
        <Components.PokemonListItem pokemon={pokemon} />
    </div>);

    return <>
        <div>
            {displayPockemons()}
        </div>
    </>;
}

export default PokemonList;