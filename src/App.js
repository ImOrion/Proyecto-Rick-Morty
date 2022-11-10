import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import {Routes, Route, useLocation} from "react-router-dom"
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import NOTFOUND from './components/NOT_FOUND/NOT_FOUND';
import Form from './components/Form/Form';
function App() {

  const onClose=(props)=>{
      setCharacters(characters.filter((element)=>element.id !== props))
  }

   const [characters, setCharacters]=useState([]);
   const location = useLocation(); 
  console.log(location);
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

      <Routes>
         <Route exact path='/' element={<Form/>}/>
         <Route exact path="/" element={<Cards onClose={onClose} personajes={characters}/>}/>
         <Route path='/Detail/:id' element={<Detail params={{id:characters.id}}/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path="*" element={<NOTFOUND/>}/>
         
      </Routes>
      
      
    </div>
  );
}





export default App;
