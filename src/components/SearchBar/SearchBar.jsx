import React, { useState } from 'react'
import "./SearchBar.css"

export default function SeachBar(props) {

  const [stateInput, setStateInput] = useState("");

  const onSearch=(event)=>{  
    setStateInput(event.target.value)  
  }

  return (
    <div className='cointainer-searchBar' >
      <input onChange={onSearch} id="input" type="text" placeholder='Escribe la DIMENSION'></input>
      <button className='searchBar-button' onClick={()=>props.onSearch(stateInput)} type="submit">Agregar</button>
    </div>
  )
}



