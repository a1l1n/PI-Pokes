import {
    GET_ALL_POKEMONS,           // L.17
    GET_POKEMON_BY_NAME,        // L.30
    GET_POKEMON_BY_ID,          // L.44
    GET_ALL_TYPES,              // L.57
    POST_A_NEW_POKEMON,         // L.71
    DELETE_POKEMON, //////////////////////////////////
    FILTER_BY_TYPES,
    FILTER_POKEMON_CREATED,
    ORDER_A_TO_Z,
    ORDER_BY_ATTACK,
    RESET_FILTERS,
    //LOADING ///////////////////////////////////////
} from './Const';

export function getAllPokemons(){
    return async function(dispatch) {
        return fetch(`http://localhost:3001/pokemons`)
        .then(res => res.json())
        .then(json => {
            dispatch({
                type: GET_ALL_POKEMONS,
                payload: json
                });
        });
    };
};

export function getPokemonByName(name){
    console.log("Si no me trae la info cambiar payload: json.data-------")
    return async function(dispatch) {
        return fetch(`http://localhost:3001/pokemons?name=${name}`)
        .then(res => res.json())
        .then(json => {
            dispatch({
                type: GET_POKEMON_BY_NAME,
                payload: json
                });
        });
    };
};

export function getPokemonById(idPoke){
    return async function(dispatch) {
        console.log("Debería entrar acá por ID")
        return fetch(`http://localhost:3001/pokemons/${idPoke}`)
        .then(res => res.json(), console.log("Esta sería la respuesta: "), )
        .then(json => {
            console.log("Este es el JSON del action",json)
            dispatch({
                type: GET_POKEMON_BY_ID,
                payload: json
                });
        });
    };
};

export function getAllTypes(){
    return async function(dispatch) {
        return fetch(`http://localhost:3001/types`)
        .then(res => res.json())
        .then(json => {
            console.log("Esto me trae el fetch: ", json)
            dispatch({
                type: GET_ALL_TYPES,
                payload: json
            });
        });
    };
};

export function postNewPokemon(){
    //POST_A_NEW_POKEMON -----------------------------------
} 

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