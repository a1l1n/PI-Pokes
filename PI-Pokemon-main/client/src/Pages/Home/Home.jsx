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
import Pagination from '../../Components/Pagination/Pagination';


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
  }, [dispatch]);



  // PAGINADO ---------------------------------------------------
  const [page, setPage] = useState(1);
  const [forPage] = useState(12)
  const totalPages = Math.ceil(allPokemons.length/forPage);

  // FILTROS ----------------------------------------------------



  return (
    <div>
      <Head />
      <NavBar />

      <div className={Styles.cardsGrid}>
        {
          loader ? (<Loading/>) :
          allPokemons
          .slice((page - 1) * forPage, (page - 1) * forPage + forPage)
          .map(poke =>{
            return (
              <div key={poke.id} className={Styles.cards}>
                <Link to={`/home/${poke.id}`}>
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
      <Pagination
        page ={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  )
}

/* 
OBJETIVOS PARA MIÉRCOLES 13/07
1) Pagination VAMOS LA CONCHA DE LA LORAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
2) Card
3) Empezar el form

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