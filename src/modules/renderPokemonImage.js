const getFemaleImage = (pokemonObj, shiny, direction) => {
    return shiny ? (
        direction === 'front' ? pokemonObj.sprites.front_shiny_female : pokemonObj.sprites.back_shiny_female
    ) : (
        direction === 'front' ? pokemonObj.sprites.front_female : pokemonObj.sprites.back_female
    )
};

const getMaleImage = (pokemonObj, shiny, direction) => {
    return shiny ? (
        direction === 'front' ? pokemonObj.sprites.front_shiny : pokemonObj.sprites.back_shiny
    ) : (
        direction === 'front' ? pokemonObj.sprites.front_default : pokemonObj.sprites.back_default
    )
};

export const renderPokemonImage = (pokemonObj, shiny, sex, direction) => {
    let imageSource = undefined;

    if (sex === 'male') {
        imageSource = getMaleImage(pokemonObj, shiny, direction)
    } else {
        imageSource = getFemaleImage(pokemonObj, shiny, direction)
    }

    return imageSource
};