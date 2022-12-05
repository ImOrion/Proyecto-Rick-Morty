import React from 'react'
import Card from '../Card/Card.jsx';

export default function Cards(props) {

  return (
    <div>
        {props.personajes.map((jorgito)=>{
          return(
            <Card
            onClose={props.onClose}
            id={jorgito.id}
            key={jorgito.id}
            name={jorgito.name}
            species={jorgito.species}
            gender={jorgito.gender}
            image={jorgito.image}
            />
          )
        })}
    </div>
  )

  
}
