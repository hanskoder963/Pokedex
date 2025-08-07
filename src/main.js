import { setupPokemonForm } from './modules/setupPokemonForm.js'


document.querySelector('#app').innerHTML = `
  <div>
    <h1>Pokedex</h1>
    <form id='searchPokemonForm'>
        <input
            id='searchPokemonInput'
            type='text'
            name='searchPokemonInput'
        >
        <input type='submit'>
    </form>
    <div id='pokemonCard'></div>
  </div>
`

setupPokemonForm(document.querySelector("#searchPokemonForm"));