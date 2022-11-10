import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'


export default function Nav(props){
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="../About">ABOUT</Link>
      <Link to="/">Iniciar Sesión</Link>
      <SearchBar onSearch={props.onSearch}/>
    </div>
  )
}
