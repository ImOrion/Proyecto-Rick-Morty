import React from 'react'


export default function Card(props) {

  const gonorrea =()=>{
    props.onClose(props.id) 
  }
  
  return (
    <div className="card">
        <button onClick={gonorrea}>X</button>
        <h1>{props.name}</h1>
        <h2>{props.species}</h2>
        <h3>{props.gender}</h3>
        <img src={props.image} alt={props.name}/>
    </div>
  )
}

const onClose=()=>{
    alert("Se cerró")
}