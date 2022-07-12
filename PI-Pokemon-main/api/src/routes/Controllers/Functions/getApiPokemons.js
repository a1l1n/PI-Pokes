const axios = require('axios');

async function getApiPokes() { 
    try {
        let apiPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40')
        let allPokemons = apiPokemon.data.results;

        const apiInfo = await Promise.all (
            allPokemons.map(async el => {
                const pokemon = await axios.get(el.url);
                return {
                    id: pokemon.data.id,
                    name: pokemon.data.name,
                    hp: pokemon.data.stats[0].base_stat,
                    attack: pokemon.data.stats[1].base_stat,
                    defense: pokemon.data.stats[2].base_stat,
                    speed: pokemon.data.stats[5].base_stat,
                    height: pokemon.data.height * 10, // a cms
                    weight: pokemon.data.weight / 10, // a kgs
                    img: pokemon.data.sprites.other.home.front_default,
                    types: pokemon.data.types.map(pokeTypes => [pokeTypes.type.name])
                }
            })
        );
        return apiInfo;
    } catch (error) {
        console.log(error);
    } 
}

module.exports = {
    getApiPokes
}