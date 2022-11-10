import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Detail(props) {

  const {id} = useParams()

  const [character,setCharacter]=useState({});


  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
       .then((response) => response.json())
       .then((char) => {
          if (char.name) {
             setCharacter(char);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       })
       .catch((err) => {
          window.alert('No hay personajes con ese ID');
       });
    return setCharacter({});
 }, [id]);

  return (
    <div>
      <Link to="/"><button>HOME</button></Link>
      <span>Name:{character.name}</span>
      <span>Status:{character.status}</span>
      <span>Species:{character.species}</span>
      <span>Gender:{character.gender}</span>
      <div>Origin:
        <span>{character.origin?.name}</span>
        <span>{character.origin?.url}</span>
        </div>
      <img src={character.image } alt={character.id}/>
    </div>
  )
}
