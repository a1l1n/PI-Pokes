import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getPokemonById } from '../../Redux/Actions';


export default function PokeDetail(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { idPoke } = useParams()
  const pokeDetail = useSelector(state => state.pokemonDetail);
  console.log("Esto es pokeDetail: ",pokeDetail);

  useEffect(()=>{
    dispatch(getPokemonById(idPoke))
  }, [dispatch, idPoke]);

  return (
    <div>PokeDetail</div>
  )
}


/* 
Ruta de detalle de Pokemon: debe contener

[ ] Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
[ ] Número de Pokemon (id)
[ ] Estadísticas (vida, ataque, defensa, velocidad)
[ ] Altura y peso
*/