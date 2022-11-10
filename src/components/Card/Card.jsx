import React from 'react'
import { Link } from 'react-router-dom'
export default function Card(props) {

  const gonorrea =()=>{
    props.onClose(props.id) 
  }
  
  return (
    <div className="card">
        <button onClick={gonorrea}>X</button>
        <Link to={`/detail/${props.id}`}>
        <h1 className='cardTitle'>{props.name}</h1>
        </Link>
        <h2>{props.species}</h2>
        <h3>{props.gender}</h3>
        <img src={props.image} alt={props.name}/>
    </div>
  )
}
