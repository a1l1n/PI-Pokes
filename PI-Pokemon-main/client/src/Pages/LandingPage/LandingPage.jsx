import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './LandingPage.module.css'

export default function LandingPage(){
  return (
    <div className={Styles.container}>
      <div className={Styles.catch}>
        <h1>You can catch them All!</h1>
      </div>
      <div className={Styles.link}>
        <Link to="/home">
          <button className={Styles.button}>
            Get Started!
          </button>
        </Link>
      </div>
    </div>
  )
}

/* 
1) Texto : "You can catch them All!"
2) Botón: Get Started!
3) Imagen
*/