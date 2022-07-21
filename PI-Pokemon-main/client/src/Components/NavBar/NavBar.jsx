import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Styles from './NavBar.module.css';


export default function NavBar({ allTypes, handleFilterByType, handleAlphabeticalOrder, handleAttackOrder }) {

  return (
    <nav className={Styles.navBar}>
      <h3>This is the NavBar</h3>

{/* SEARCHBAR  --------------------------------------------------------- */}      
        <SearchBar />

{/* OPTIONS  ----------------------------------------------------------- */}
    <select onChange={e => handleAlphabeticalOrder(e)}>
        <option value="" disabled>Name</option>
        <option value="aToZ">A to Z</option>
        <option value="zToA">Z to A</option>
    </select>
    <select onChange={e => handleAttackOrder(e)}>
        <option disabled>Attack</option>
        <option value="more">+ Attack</option>
        <option value="less">- Attack</option>
    </select>        
    
{/* FILTERS  ----------------------------------------------------------- */}
{/*     <label>Filter by Types: </label> */}
    <select value="desabled" onChange={e => handleFilterByType(e)}>
        <option value="">Type</option>
        <option value="all">All</option>
        {
        allTypes?.map(t =>(
          <option key={t.name} value={t.name}>{t.name}</option>
        ))
        }
    </select>
    <select value="desabled">
        <option disabled>Origin</option>
        <option value="allPokes">All Pokemons</option>
        <option value="apiPokes">The Pokemons</option>
        <option value="dbPokes">Your Pokemons!</option>
    </select>
      </nav>
  )
};

/* 
[ ] Botones/Opciones para filtrar por tipo de pokemon y por pokemon existente o creado por nosotros
[ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemons 
por orden alfabético y por ataque
*/
