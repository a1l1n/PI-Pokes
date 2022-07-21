import axios from "axios";
import {
    GET_ALL_POKEMONS,           
    GET_POKEMON_BY_NAME,        
    GET_POKEMON_BY_ID,          
    GET_ALL_TYPES,              
    POST_A_NEW_POKEMON,         
    FILTER_BY_TYPES,
    FILTER_POKEMON_CREATED,
    ORDER_A_TO_Z,
    ORDER_BY_ATTACK,
    RESET_FILTERS,
    DELETE_POKEMON, //////////////////////////////////
    //LOADING ///////////////////////////////////////
} from './Const';

export function getAllPokemons(){
    return async function(dispatch) {
        return fetch(`http://localhost:3001/pokemons`)
        .then(res => res.json())
        .then(json => {
            console.log("Esto me trae el fetch de getAllPokemons", json)
            dispatch({
                type: GET_ALL_POKEMONS,
                payload: json
                });
        });
    };
};

export function getPokemonByName(name){
    return async function(dispatch) {
        return fetch(`http://localhost:3001/pokemons?name=${name}`)
        .then(res => res.json())
        .then(json => {
            console.log("Esto me trae el fetch de getPokemonByName: ", json)
            dispatch({
                type: GET_POKEMON_BY_NAME,
                payload: json
                });
        });
    };
};

export function getPokemonById(idPoke){   
    return async function(dispatch) {
        try {
            var pokeInfo = await axios.get(`http://localhost:3001/pokemons/${idPoke}`)  
            console.log("Esto me trae el fetch de getPokemonById: ", pokeInfo)
            return dispatch({
                type:GET_POKEMON_BY_ID,
                payload: pokeInfo.data
            })
        } catch (error) {
            console.log(error)
        }
/*         console.log("Debería entrar acá por ID")
        return fetch(`http://localhost:3001/pokemons/${idPoke}`)
        .then(res => res.json())
        .then(json => {
            console.log("Esto me trae el fetch de getPokemonById", json)
            dispatch({
                type: GET_POKEMON_BY_ID,
                payload: json
                });
        });
    }; */
};
};

export function getAllTypes(){
    return async function(dispatch) {
        return fetch(`http://localhost:3001/types`)
        .then(res => res.json())
        .then(json => {
            console.log("Esto me trae el fetch de getAllTypes: ", json)
            dispatch({
                type: GET_ALL_TYPES,
                payload: json
            });
        });
    };
};

export function postNewPokemon(payload){
    return async function (dispatch){
        let newPoke = await axios.post(`http://localhost:3001/pokemons`, payload);
        return newPoke;
    };
}; 

export function filterByTypes(payload){
    return {
        type: FILTER_BY_TYPES,
        payload: payload
    }
};


export function orderAtoZ(payload){
    return {
        type: ORDER_A_TO_Z,
        payload: payload
    }
};

export function orderByAttack(payload){
    return {
        type: ORDER_BY_ATTACK,
        payload: payload
    }
}



/* 
[ ] Botones/Opciones para filtrar por tipo de 
pokemon y por pokemon existente o creado por nosotros
[ ] Botones/Opciones para ordenar tanto 
ascendentemente como descendentemente los pokemons 
por orden alfabético y por ataque
*/