import {
    GET_ALL_POKEMONS,
    GET_POKEMON_BY_NAME,
    GET_POKEMON_BY_ID,
    GET_ALL_TYPES,
    POST_A_NEW_POKEMON,
    DELETE_POKEMON, //////////////////////////////////
    FILTER_BY_TYPES,
    FILTER_POKEMON_CREATED,
    ORDER_A_TO_Z,
    ORDER_Z_TO_A,
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
    console.log("Si no me trae la info cambiar payload: json.data-------")
    return async function(dispatch) {
        return fetch(`http://localhost:3001/pokemons/${idPoke}`)
        .then(res => res.json())
        .then(json => {
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


/* 
[ ] Botones/Opciones para filtrar por tipo de 
pokemon y por pokemon existente o creado por nosotros
[ ] Botones/Opciones para ordenar tanto 
ascendentemente como descendentemente los pokemons 
por orden alfabético y por ataque
*/