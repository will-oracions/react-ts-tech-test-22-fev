import URLConfig from '@Config/urls.config';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    pokemon: any;
};

const PokemonListItem: React.FC<Props> = ({ pokemon }) => {
    return <>
        <div>
            <Link to={`${URLConfig.POKEMON_LIST}/${pokemon.id}`}>Pokemon List item</Link>
        </div>
    </>;
}

export default PokemonListItem;