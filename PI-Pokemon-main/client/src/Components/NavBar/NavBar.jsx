import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Styles from './NavBar.module.css';


export default function NavBar() {
  return (
    <nav className={Styles.navBar}>
      <h3>This is the NavBar</h3>
        <SearchBar />
  {/* OPTIONS ------------------------------------------------------------ */}
        <select>
          <option value="aToZ">Name</option>
          <option value="aToZ">A to Z</option>
          <option value="zToA">Z to A</option>
        </select>
        <select>
          <option>Attack</option>
          <option>+ Attack</option>
          <option>- Attack</option>
        </select>

  {/* FILTERS ------------------------------------------------------------ */}
        <select>
          <option>Type</option>
          
        </select>

  {/* { name: 'normal' },   { name: 'fighting' },
  { name: 'flying' },   { name: 'poison' },
  { name: 'ground' },   { name: 'rock' },
  { name: 'bug' },      { name: 'ghost' },
  { name: 'steel' },    { name: 'fire' },
  { name: 'water' },    { name: 'grass' },
  { name: 'electric' }, { name: 'psychic' },
  { name: 'ice' },      { name: 'dragon' },
  { name: 'dark' },     { name: 'fairy' },
  { name: 'unknown' },  { name: 'shadow' } */}
        <select>
          <option>Origin</option>
          <option>All Pokemons</option>
          <option>The Pokemons</option>
          <option>Your Pokemons!</option>
        </select>
    </nav>
  )
};

/* 
[ ] Botones/Opciones para filtrar por tipo de pokemon y por pokemon existente o creado por nosotros
[ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemons 
por orden alfabético y por ataque
*/
