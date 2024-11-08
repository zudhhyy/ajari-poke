export interface PokemonListType {
    name: string;
    url: string;
}

export interface PokemonDetailType {
    abilities: Ability[];
    base_experience: number;
    forms: Species[];
    height: number;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    name: string;
    order: number;
    past_abilities: any[];
    past_types: any[];
    species: Species;
    stats: Stat[];
    types: PokemonType[];
    weight: number;
}

export interface Ability {
    ability: Species;
    is_hidden: boolean;
    slot: number;
}

export interface Species {
    name: string;
    url: string;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: Species;
}

export interface PokemonType {
    slot: number;
    type: Species;
}
