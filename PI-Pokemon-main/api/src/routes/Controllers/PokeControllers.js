const { Pokemon, Type } = require('../../db');
const { getAllPokemons } = require('./Functions/getAllPokemons');

/* Jalu, en algún momento me podrás dar una mano con el back? (again?) Lo estuvimos viendo con César y no hay caso. Tengo unos problemillas (detallies) que me están complicando la vida. En el mientras estoy trabajando con el front (aprovechando que ya me puedo traer todos los pokemones), así que cuando
 tengas tiempo y ganas, la verdá que no hay apuro (bueno, sí, hay, pero tengo un millón de cosas para hacer en el mientras) */

async function getPokes(req, res){
    const { name } = req.query;
    const totalPokemons = await getAllPokemons();
    try {
        if (name) {
            const pokemonName = totalPokemons.filter(el => el.name.toLowerCase() === name.toLowerCase());
            return res.status(200).send(pokemonName);
        } else { 
            return res.status(200).send(totalPokemons);
        }
    } catch(error) { 
        console.log(error)
    }
}

// ID --------------------------------------------------------------------------

async function getPokeId(req, res){
     const { idPoke } = req.params
    console.log("ID ingresada por params: ", idPoke);
    try {
        let allPokemons = await getAllPokemons();
    if(idPoke){
        const findingPoke = await allPokemons.filter(pkId => pkId.id == idPoke);
        console.log("Poke by ID: ", findingPoke)
        if(findingPoke) return res.status(200).send(findingPoke);
        return res.status(400).send("Pokemon not found, please try again")  
    } 
    } catch (error) {
        console.log(error);
        return res.status(400).send("Ups, something went wrong...") 
        
        // Averiguar cuándo conviene o si siempre es necesario utilizar esta sintaxis, si siempre es necesario el .json o no y si hace la diferencia el uso del 400 y 404
    } 
};

// POST -------------------------------------------------------------------------

async function postPoke(req, res){
    const { name, hp, attack, defense, speed, height, weight, types, img } = req.body;
    if (!name || !hp || !attack || !defense || !speed || !height || !weight || !types) return res.status(400).send('Please, all fields must be completed')
    // Método para tener una imagen default con un if
    try {
        const newPoke = await Pokemon.findOrCreate({
            where: {name: name},
            defaults: {
                hp: hp,
                attack: attack,
                defense: defense,
                speed: speed,
                height: height,
                weight: weight,
                img: img
            }
        });
        console.log("New Poke: ", newPoke)
        const typeList = await Type.findAll({
            where:{
                name: types
            }
        })
        console.log("Tipos seleccioandos en la db: ", typeList);
        const response = await newPoke.addType(typeList);
        console.log("Response: ", response);
        return res.status(200).send("Your Pokemon has been successfully created!")
    } catch (error) {
        res.send(error);
    }
};

module.exports = {
    getPokes, 
    getPokeId,
    postPoke    
};