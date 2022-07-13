import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Styles from './NavBar.module.css';


export default function NavBar() {
  return (
    <nav className={Styles.navBar}>
      <h3>This is the NavBar</h3>
        <SearchBar />
    </nav>
  )
}
