import React from "react";
import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import NOTFOUND from "./components/NOT_FOUND/NOT_FOUND";
import Form from "./components/Form/Form";
function App() {
  const location = useLocation();

  const navigate = useNavigate();

  const [access, setAccess] = useState(false);
  const username = "mateou771@gmail.com";
  const password = "cambiela0";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }

  React.useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onClose = (props) => {
    setCharacters(characters.filter((element) => element.id !== props));
  };

  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
    let acces = true;
    characters.map((personaje) =>{
      let Character = parseInt(character);
      if (personaje.id === Character) {
        window.alert("ya existe este personaje");
        document.querySelector("#input").value = "";
        return (acces = false);
      }
    });

    if (acces) {
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters([data, ...characters]);
            //console.log(characters)
            document.querySelector("#input").value = "";
          } else {
            window.alert("No hay personajes con ese ID");
            document.querySelector("#input").value = "";
          }
        });
    }
  }

  //  function onSearch(character) {
  //   fetch(`https://rickandmortyapi.com/api/character/${character}`)
  //      .then((response) => response.json())
  //      .then((data) => {
  //         if (data.name) {
  //            setCharacters((oldChars) => [...oldChars, data]);
  //         } else {
  //            window.alert('No hay personajes con ese ID');
  //         }
  //      });
  // }

  return (
    <div className="App">
      {location.pathname === "/" ? null : <Nav onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/Home"
          element={<Cards onClose={onClose} personajes={characters} />}
        />
        <Route
          path="/Detail/:id"
          element={<Detail params={{ id: characters.id }} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NOTFOUND />} />
      </Routes>
    </div>
  );
}

export default App;
