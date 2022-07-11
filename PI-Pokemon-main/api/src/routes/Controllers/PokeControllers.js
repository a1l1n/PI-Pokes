const axios = require('axios');
const { Pokemon, Type } = require('../../db');
const { getAllPokemons } = require('./Functions/getAllPokemons');

async function getPokes(req, res){
    const { name } = req.query;
    const totalPokemons = await getAllPokemons();
    try {
        if (name) {
            const pokemonName = totalPokemons.filter(el => el.name.toLowerCase() === name.toLowerCase());
            res.status(200).send(pokemonName);
        } else { 
            res.status(200).send(totalPokemons);
        }
    } catch(error) { 
        console.log(error)
    }
}

// ID --------------------------------------------------------------------------

async function getPokeId(req, res){
    const { idPoke } = req.params;
    try {
        let allPokemons = await getAllPokemons();
        console.log("ID ingresada por params: ", idPoke);
    if(idPoke){
        const findingPoke = await allPokemons.filter(pkId => pkId.id === idPoke);
        console.log("Poke by ID: ", findingPoke)
        if(findingPoke) res.status(200).send(findingPoke);
        res.status(400).send("Pokemon not found, please try again") 
    } 
    } catch (error) {
        console.log(error);
        res.status(400).json("Ups, something went wrong...")
        
        // Averiguar cuándo conviene o si siempre es necesario utilizar esta sintaxis, si siempre es necesario el .json o no y si hace la diferencia el uso del 400 y 404
    } 
};

// POST -------------------------------------------------------------------------

async function postPoke(req, res){
    const { name, hp, attack, defense, speed, height, weight, types, img } = req.body;
    console.log("Data ingresada: ", req.body);
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
        const typeList = await Type.findAll({
            where:{
                name: types
            }
        })
        console.log("Tipos guardados: ", typeList);
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