import { fetchPokemon } from "./fetchPokemon.js";
import { renderPokemonCard } from "./renderPokemonCard.js";

export const setupPokemonForm = (formElement) => {
    formElement.addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = new FormData(formElement);
        const searchInput = form.get('searchPokemonInput');
        const pokemon = await fetchPokemon(searchInput);

        //Render pokemon card
        renderPokemonCard(
            document.querySelector("#pokemonCard"),
            pokemon
        );
    });
};