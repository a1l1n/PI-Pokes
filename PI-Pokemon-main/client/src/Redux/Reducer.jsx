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
    RESET_FILTERS
} from './Const';

const initialState = {
    allPokemons: [],
    pokemon: [],
    pokemonDetail: [],
    types: [],
    loading: true
};

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
              ...state,
              allPokemons: payload,
              loading: false
            };
        case GET_POKEMON_BY_NAME:
            return {
                ...state,
                pokemon: action.payload,
                loading: false
            };
        case GET_POKEMON_BY_ID:
            return {
                ...state,
                pokemonDetail: action.payload,
            };
        case GET_ALL_TYPES:
            return {
                ...state,
                types: action.payload
            };
        case POST_A_NEW_POKEMON:
            return {
                ...state
            };
        case 




        default:
            break;
    }
} 