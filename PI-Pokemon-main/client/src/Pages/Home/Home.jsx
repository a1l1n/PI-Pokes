import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  getAllPokemons,
  getAllTypes } from '../../Redux/Actions'
import Head from '../../Components/Head/Head'
import NavBar from '../../Components/NavBar/NavBar'
import Cards from '../../Components/Cards/Cards';
import Loading from '../../Components/Loading/Loading';
import Styles from './Home.module.css'


export default function Home(){
  /* This hook returns a reference to the dispatch function from the Redux store. 
  You may use it to dispatch actions as needed */
  const dispatch = useDispatch();
  /* It returns just what I need from the state */
  const allPokemons = useSelector(state => state.allPokemons);
  const allTypes = useSelector(state => state.types);
  const loader = useSelector(state => state.loading)

  useEffect(() =>{
    dispatch(getAllPokemons());
    dispatch(getAllTypes());
  }, [dispatch])

  return (
    <div>
      <Head />
      <NavBar />
      <div className={Styles.cards}>
        {
          loader ? (<Loading/>) :
          allPokemons?.map(poke =>{
            return (
              <div key={poke.id}>
                <Link to={'/home/' + poke.id}>
                  <Cards 
                  name={poke.name}
                  img={poke.img} 
                  types={poke.types}
                  />
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

/* 
OBJETIVOS PARA MIÉRCOLES 13/07
1) Actions
2) Reducer
3) Cards

Componentes que confluyen acá:
NavBar
Cards
Filtros

------------------
Estados -> useEffect, useDispatch, useHistory

[ ] Área donde se verá el listado de pokemons. Al iniciar deberá cargar los primeros 
resultados obtenidos desde la ruta GET /pokemons y deberá mostrar su:
Imagen
Nombre
Tipos (Electrico, Fuego, Agua, etc)
 */