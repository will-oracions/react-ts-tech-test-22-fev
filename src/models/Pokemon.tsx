export interface PokemonModel {
    id: number;
    image: string;
    name: string;
    types: PokemonModelType[];
}

export type PokemonModelType = {
   name: string;
//    image: string;
};

export const PokemonAdapter = (item: any): PokemonModel => {
    console.log(item);
    return {
        id: item.id || '',
        image: item.image || '',
        name: item.name || '',
        types: item.apiTypes || [],
    };
}