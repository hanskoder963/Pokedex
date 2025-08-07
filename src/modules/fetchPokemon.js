import { pokemonApiUrl } from "../config.js";

export const fetchPokemon = async (pokemon) => {
    const response = await fetch(`${pokemonApiUrl}/pokemon/${pokemon}`);
    if (response.status !== 304 && response.status !== 200) {
        throw new Error('Failed to fetch pokemon.')
    }

    let pokemonData = null;
    try {
        pokemonData = await response.json();
    } catch (err) {
        throw new Error('Failed to get JSON from fetchPokemon.');
    }
    return pokemonData;
};