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
    DELETE_POKEMON, //////////////
} from './Const';

const initialState = {
    allPokemons: [], ////////////////////// getAllPokemons
    pokemons: [], ////////////////////////  filteredPokes
    pokemonDetail: [], //////////////////   getPokeById
    types: [], //////////////////////////   getTypes
    loading: true
};

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_ALL_POKEMONS:  //-----------------------------------------------------------------------------
            return {
              ...state,
              allPokemons: action.payload,
              pokemon: action.payload,
              loading: false
            };
        case GET_POKEMON_BY_NAME:   //-------------------------------------------------------------------------
            return {
                ...state,
                pokemon: action.payload,
                loading: false
            };
        case GET_POKEMON_BY_ID: //-----------------------------------------------------------------------------
            return {
                ...state,
                pokemonDetail: action.payload,
            };
        case GET_ALL_TYPES: //---------------------------------------------------------------------------------
            return {
                ...state,
                types: action.payload
            };
        case POST_A_NEW_POKEMON:    //-------------------------------------------------------------------------
            return {
                ...state
            };
        case FILTER_BY_TYPES:   //-----------------------------------------------------------------------------
            const filterType = action.payload === "all" ? state.allPokemons : state.allPokemons.filter(p => p.types.find(t => t[0] === action.payload));    
        return {
            ...state,
            pokemons: filterType
            }; 
        case FILTER_POKEMON_CREATED:    //---------------------------------------------------------------------FALTAAAAAAAAAAAAAAAAA
        
            return {

            }
        case ORDER_A_TO_Z:  //---------------------------------------------------------------------------------
            let orderedList = action.payload === "aToZ" 
            ? state.pokemons.sort(function(a,b) {
                if (a.name > b.name) return 1;
                if (b.name > a.name) return -1;
                return 0;
            }) : state.pokemons.sort(function(a,b){
                if (a.name > b.name) return -1;
                if (b.name > a.name) return 1;
                return 0;
            })
            return {
                ...state,
                pokemon: orderedList
            };
        case ORDER_BY_ATTACK:   //-----------------------------------------------------------------------------
            let orderAttack = action.payload === "less" 
            ? state.pokemons.sort(function(a,b) {
                if (a.attack > b.attack) return 1;
                if (b.attack > a.attack) return -1;
                return 0;
            }) : state.pokemons.sort(function(a,b){
                if (a.attack > b.attack) return -1;
                if (b.attack > a.attack) return 1;
                return 0;
            })
            return {
                ...state,
                pokemon: orderAttack
            }

        default:
            return state;
    }
} 