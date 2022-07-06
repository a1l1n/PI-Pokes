const axios = require('axios');
const { Pokemon, Type } = require('../db');

async function getApiPokes(){
    try {
        let apiPoke = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=40`);
        //let allPokes = apiPoke.data.results;
        let allPokesMap = await Promise.all(
            apiPoke.map(async (p) =>{
                const pokes = await axios.get(p.url);
                return {
                    id: pokes.data.id,
                    name: pokes.data.name,
                    hp: pokes.data.stats[0].base_stat,
                    attack: pokes.data.stats[1].base_stat,
                    defense: pokes.data.stats[2].base_stat,
                    speed: pokes.data.stats[5].base_stat,
                    height: pokes.data.height,
                    weight: pokes.data.weight,
                    img: pokes.data.sprites.other.home.front_default,
                    types: pokes.data.types.map(pt => [pt.type.name])
                }
            })
        ); 
        console.log(allPokesMap);
        return allPokesMap;
    } catch (error) {
        console.log(error)
    } 
};

async function getDbPokes(){
    try {
        //Buscamos los pokes de la db con sus respectivos Types
        const db = await Pokemon.findAll({
            include:{
                model: Type,
                attributes: ['name'],
                through: { attributes: [] }
            }
        });
        const pokeToJson = db.map( p => p.toJSON());
        const pokeTypes = pokeToJson.map( p => {
            const typeName = p.types.map( t => [t.name]);
            return {... p, types: typeName}
        })
        return pokeTypes;
    } catch (error) {
        console.log(error)
    }
};

async function getAllPokes(){
    const [ getApiPokes, getDbPokes] = await Promise.all([getApiPokes(), getDbPokes()]);
    const allPokeInfo = getApiPokes.concat(getDbPokes);
    return allPokeInfo;
};

module.exports = {
    getApiPokes,
    getDbPokes,
    getAllPokes
}


/*         */
