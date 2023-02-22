import axios from 'axios';
import EnvConfig from '@Config/env.config';
import { PokemonAdapter } from '../models/Pokemon';

const rootURL = `${EnvConfig.API_BASE_URL}`;
console.log('BASE URL: ', rootURL);

export const findAllPokemons = () => axios.get(rootURL)
    .then((res) => res.data
        .map((item: any) => PokemonAdapter(item))
    );

export const findByPokemonId = (id: number) => () => axios.get(`${rootURL}/${id}`).then((res) => res.data);

const PokemonsAPI = { findAllPokemons, findByPokemonId };
export default PokemonsAPI;