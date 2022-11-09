import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';


function App() {

  const onClose=(props)=>{
      setCharacters(characters.filter((element)=>element.id !== props))

  }

 const [characters, setCharacters]=useState([]);


 function onSearch(character) {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
}


  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards onClose={onClose} personajes={characters}/>
    </div>
  );
}





export default App;
