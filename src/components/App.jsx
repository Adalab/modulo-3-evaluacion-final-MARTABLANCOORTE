import '../scss/App.scss'

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Filters from './Filters/Filters';
import CharacterList from './Characters/CharacterList';
import CharacterDetail from './Pages/CharacterDetail';
import ls from '../services/LocalStorage';
import fetchCharacters from '../services/fetch';


function App() {

  // 1. Variables de estado

  const [characters, setcharacters] = useState(ls.get("characters", []));

  const [ filterAlive, setFilterAlive ] = useState( 'all' );

  // 2. useEffect

  useEffect(() => {
    // Cuando carga la página

    if (!ls.includes("characters")) {
      fetchCharacters().then((data) => {
        setcharacters(data);
        ls.set("characters", data);
      });
    }
  }, []);

  
  // 3. funciones de eventos

  const handleChangeFilterAlive = (alive) => {
    setFilterAlive(alive)
  };
  
  
  // 4. variables para el html

   const findCharacter = (id) => {
    return characters.find((character) => character.id === id);
  };

  const filteredCharacters = characters.filter(character => filterAlive==='all' || character.alive === filterAlive );

  // 5. Html en el return

  return (
  <div className="page">
    <Header/>
    <Routes>
        <Route path="/" element={
          <div className="col2">
            <div><Filters filterAlive={filterAlive} handleChangeFilterAlive={handleChangeFilterAlive}/></div>
            <div><CharacterList characters={filteredCharacters} /></div>
          </div>}/>
        <Route path="/character/:id" element={<CharacterDetail findCharacter={findCharacter}/>}/>
    </Routes>
    <Footer/>
  </div>)
}

export default App
