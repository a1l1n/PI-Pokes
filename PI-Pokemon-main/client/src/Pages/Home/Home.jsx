import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'

export default function Home(){
  return (
    <div>
      Home
      <NavBar />
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