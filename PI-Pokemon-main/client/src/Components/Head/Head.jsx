import React from 'react';
import Styles from './Head.module.css';
import Logo from './Pokemon-logo.png'


export default function Head() {
    return (
      <nav className={Styles.navigation}>
       {/*  <img src={Logo} className={Styles.img}/> */}
       <a href='/'> POKEMON </a>
        <ul>
          <li> 
            <a href='/home'> Home </a> 
            <a href='/pokemons'> Create! </a>
           
          </li>
          <li>  <a href='/about'> About </a> </li>
        </ul>
      </nav>
    )
  }
  