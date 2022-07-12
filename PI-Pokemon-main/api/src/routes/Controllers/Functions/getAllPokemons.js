const getApiPokes = require('./getApiPokemons');
const getDbPokes = require('./getDbPokemons');

async function getAllPokemons() {
    const [apiInfo, dbInfo] = await Promise.all([getApiPokes(), getDbPokes()]); 
    const allPokemonsInfo = apiInfo.concat(dbInfo);
    return allPokemonsInfo;
}

module.exports = {
    getAllPokemons
};