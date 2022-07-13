import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import LandingPage from './Pages/LandingPage/LandingPage';
import PokeDetail from './Pages/PokeDetail/PokeDetail';
import PokeForm from './Pages/PokeForm/PokeForm';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<LandingPage/>} />
    <Route exact path="/home" element={<Home/>} />
    <Route exact path="/home/:id" element={<PokeDetail/>} />
    <Route exact path="/pokemons" element={<PokeForm/>} />
    <Route exact path="/about" element={<About/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
