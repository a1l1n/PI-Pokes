import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './Cards.module.css';

export default function Cards({ name, img, types}) {


  return (
    <div className={Styles.cards}>
        <img src={img} alt='' width='100px' height='100px' className={Styles.countryImage}/> 
        <h3 className={Styles.name}>{name}</h3>
        <h4 className={Styles.types}>{types}</h4>
        { types.lenght > 1 ? <h4>{types[1][0]}</h4> : null}
    </div>
  )
}

/* 
Contenedores:
1) 
 */
