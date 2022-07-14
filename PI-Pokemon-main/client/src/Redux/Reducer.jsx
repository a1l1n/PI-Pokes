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
    LOADING
} from './Const';

const initialState = {
    allPokemons: [], ////////////////////// getAllPokemons
    pokemon: [], /////////////////////////  poke?name=
    pokemonDetail: [], //////////////////   getPokeById
    types: [], //////////////////////////   getTypes
    loading: true
};

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
              ...state,
              allPokemons: action.payload,
              pokemon: action.payload,
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
        case FILTER_BY_TYPES:  ////////////////////////////////////
            return {

            } 
        case FILTER_POKEMON_CREATED:
            return {

            }
        

/*         case LOADING:
            return {
                ...state,
                loading: true
            } */
        default:
            return state;
    }
} 