import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  getAllPokemons,
  getAllTypes,
  filterByTypes,
  orderAtoZ,
  orderByAttack } from '../../Redux/Actions'
import Head from '../../Components/Head/Head'
import NavBar from '../../Components/NavBar/NavBar'
import Cards from '../../Components/Cards/Cards';
import Loading from '../../Components/Loading/Loading';
import Styles from './Home.module.css'
import Pagination from '../../Components/Pagination/Pagination';


export default function Home(){
  /* This hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed */
  const dispatch = useDispatch();
  /* It returns just what I need from the state */
  const allPokemons = useSelector(state => state.pokemons);
  const allTypes = useSelector(state => state.types); 
  const loader = useSelector(state => state.loading)
  const [order, setOrder] = useState('')

  useEffect(() =>{
    dispatch(getAllPokemons());
    dispatch(getAllTypes());
  }, [dispatch]);

  // PAGINADO ---------------------------------------------------------------------------
  const [page, setPage] = useState(1);
  const [forPage] = useState(12)
  const totalPages = Math.ceil(allPokemons.length/forPage);

  // FILTROS ----------------------------------------------------------------------------
  function handleFilterByType(e){
    e.preventDefault();
    dispatch(filterByTypes(e.target.value));
    setPage(1);
  };

  function handleAlphabeticalOrder(e){
    e.preventDefault();
    dispatch(orderAtoZ(e.target.value));
    setPage(1);
    setOrder(e.target.value);
  };

  function handleAttackOrder(e){
    e.preventDefault();
    dispatch(orderByAttack(e.target.value));
    setPage(1);
    setOrder(e.target.value)
  };


  return (
    <div>
      <Head />
{/* ------------------------------------------------------------------------------------- */}
      <NavBar 
        allTypes={allTypes}
        handleFilterByType={handleFilterByType}
        handleAlphabeticalOrder={handleAlphabeticalOrder}
        handleAttackOrder={handleAttackOrder}
      />
{/* ------------------------------------------------------------------------------------- */}
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
{/* ------------------------------------------------------------------------------------- */}
      <Pagination
        page ={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  )
}


/* 

FALTA TERMINAR CON EL FILTRO DE ORIGEN
FALTA TERMINAR EL FORMULARIO
FALTA TERMINAR EL REQ.QUERY
FALTA TERMINAR EL REQ.PARAMS
FALTA EL SEARCHBAR

--------------------------------------------------------------
Componentes que confluyen acá:
NavBar
Cards
------------------
Estados -> useEffect, useDispatch, useHistory

 */