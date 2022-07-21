import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTypes, getAllPokemons, postNewPokemon } from '../../Redux/Actions';
import Validations from './Validations';
import Head from '../../Components/Head/Head';
import Styles from "./PokeForm.module.css";

export default function PokeForm(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allTypes = useSelector(state => state.types);
  const allPokes = useSelector(state => state.getAllPokemons);

  const [ error, setError ] = useState({required: true});
  const [ input, setInput ] = useState({
    name: "", 
    hp: "", 
    attack: "", 
    defense: "",
    speed: "",
    height: "",
    weight: "",
    img: "",
    types: []
  });

  useEffect(()=>{ // -----------------------------------------------------------------------------
    dispatch(getAllPokemons());
    dispatch(getAllTypes());
  }, [dispatch]);

  const handleChange = (e) =>{ // ----------------------------------------------------------------
    setInput((input) => ({
      ...input,
      [e.target.name]: e.target.value,
    }))
    setError(Validations({
      ...input,
      [e.target.name]: e.target.value
    }))
  };

  const handleSelect = (e) =>{ // ----------------------------------------------------------------
    setInput((input) =>({
      ...input,
      type: [...input.allTypes, e.target.value]
    }))
  }



  return (
    <div>
      <Head />
      <nav>
      </nav>
      
      <div className={Styles.createContainer}>
        <div className={Styles.pokemonCreate}>
          <h1>Create a new Pokemon!</h1>
            <form /* onSubmit={e => handleSubmit(e)} */ autoComplete="off">

              <div>
                <label>Name: </label>{/* ----------------------------------------------------------------------- */}
                <input type="text" value={input.name} name="name" placeholder='Name' onChange={handleChange} required/>
                {/* FALTAN LAS VALIDACIONES en un SPAN */}
              </div>
              <div>
                <label>Hp: </label>{/* ----------------------------------------------------------------------- */}
                <input type="number" value={input.hp} name="hp" placeholder='Hp' min="0" max="200" onChange={handleChange} required/>
                {/* FALTAN LAS VALIDACIONES en un SPAN */}
              </div>
              <div>
                <label>Attack: </label>{/* ----------------------------------------------------------------------- */}
                <input type="number" value={input.attack} name="attack" placeholder='Attack' min="0" max="200" onChange={handleChange} required/>
                {/* FALTAN LAS VALIDACIONES en un SPAN */}
              </div>
              <div>
                <label>Defense: </label>{/* ----------------------------------------------------------------------- */}
                <input type="number" value={input.defense} name="defense" placeholder='Defense' min="0" max="200" onChange={handleChange} required/>
                {/* FALTAN LAS VALIDACIONES en un SPAN */}
              </div>
              <div>
                <label>Speed: </label>{/* ----------------------------------------------------------------------- */}
                <input type="number" value={input.speed} name="speed" placeholder='Speed' min="0" max="200" onChange={handleChange} required/>
                {/* FALTAN LAS VALIDACIONES en un SPAN */}
              </div>
              <div>
                <label>Height: </label>{/* ----------------------------------------------------------------------- */}
                <input type="number" value={input.height} name="height" placeholder='Height' min="0" max="200" onChange={handleChange} required/>
                {/* FALTAN LAS VALIDACIONES en un SPAN */}
              </div>
              <div>
                <label>Weight: </label>{/* ----------------------------------------------------------------------- */}
                <input type="number" value={input.weight} name="weight" placeholder='Weight' min="0" max="200" onChange={handleChange} required/>
                {/* FALTAN LAS VALIDACIONES en un SPAN */}
              </div>
              <div>
                <label>Type: </label>{/* ----------------------------------------------------------------------- */}
                <select onChange={e => handleSelect(e)} value="disabled">
                  <option value="">Select Types</option>
                  {
                    allTypes.map(t =>(
                      <option key={t.name}>{t.name}</option>
                    ))
                  }
                </select>
              </div>
              <div>
                <label>Image: </label>{/* ----------------------------------------------------------------------- */}
                <input type="text" value={input.img} name="img"placeholder='Link'/>
                <img src={input.img} alt=""/>
              </div>
              <button type="submit">Create!</button>{/* ----------------------------------------------------------------------- */}
            </form>
        </div>
      </div>
    </div>
  )
}

/* 
Ruta de creación: debe contener

[ ] Un formulario controlado con JavaScript con los campos mencionados en el detalle 
del Pokemon
[ ] Posibilidad de seleccionar/agregar más de un tipo de Pokemon
[ ] Botón/Opción para crear un nuevo Pokemon
Es requisito que el formulario de creación esté validado con JavaScript y no sólo con 
validaciones HTML. Pueden agregar las validaciones que consideren. Por ejemplo: 
Que el nombre del Pokemon no pueda contener caracteres numéricos, que la altura no pueda 
ser superior a determinado valor, etc.
*/