import React, { useState } from 'react'


export default function SeachBar(props) {

  const [stateInput, setStateInput] = useState("");

  const onSearch=(event)=>{  
    setStateInput(event.target.value)  
  }

  return (
    <div>
      <input onChange={onSearch} id="input" type="text" placeholder='Escribe la DIMENSION'></input>
      <button onClick={()=>props.onSearch(stateInput)} type="submit">Agregar</button>
    </div>
  )
}



