import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './Cards.module.css';

export default function Cards({ name, img, types}) {
  return (
    <div className={Styles.cards}>
        <img src={img} alt='' width='250px' height='125px' className={Styles.countryImage}/> 
        <h3>{name}</h3>
        <h4>{types}</h4>
    </div>
  )
}

/* 
Una tarjeta -> link a Card (id)
 */
