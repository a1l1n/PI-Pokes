const axios = require('axios');
const { Pokemon, Type } = require('../db');
const getAllPokes = require('./pokeFunctions');

async function getPokes(req, res){
    const { pokeName } = req.query;
    try {
    
    } catch (error) {
        console.log('Todo falló');
        res.send(error);
    }
};

// ID --------------------------------------------------------------------------

async function getPokeId(req, res){
    const { id } = req.params;
    try {
        const poke = await Pokemon.findOne({
            where: { id: id },
            include: Type
        });
    if (poke) return res.status(200).json(poke);
    return res.status(404).send('Pokemon not found, please try again');
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

