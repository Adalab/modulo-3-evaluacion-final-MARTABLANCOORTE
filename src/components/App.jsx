import "../scss/App.scss";

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Pages/Landing/Header";
import Footer from "./Pages/Landing/Footer";
import Filters from "./Filters/Filters";
import CharacterList from "./Characters/CharacterList";
import CharacterDetail from "./Pages/CharacterDetail";
import ls from "../services/LocalStorage.js";
import fetchCharacters from "../services/fetch.js";

function App() {
  // 1. Variables de estado
  const [characters, setcharacters] = useState(ls.get("characters", []));
  const [filterCharacter, setfilterCharacter] = useState("");
  const [filterStudent, setfilterStudent] = useState("all");
  const [filterHouse, setfilterHouse] = useState("all");
  const [filterGender, setfilterGender] = useState("all");
  const [filterAlive, setfilterAlive] = useState("all");

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

  // Función para manejar el cambio en el filtro de estudiante
  const handleFilterCharacter = (value) => {
    setfilterCharacter(value);
  };

  const handleFilterStudent = (value) => {
    setfilterStudent(value);
  };

  const handleFilterHouse = (value) => {
    setfilterHouse(value);
  };

  const handleFilterGender = (value) => {
    setfilterGender(value);
  };

  const handleFilterAlive = (value) => {
    setfilterAlive(value);
  };

  // Función para aplicar el filtro Student - Staff - All
  const applyFilterStudent = (data) => {
    if (setfilterStudent === "All") {
      return data;
    } else if (setfilterStudent === "Students") {
      return data.filter(
        (character) => character.hogwartsStudent === "Student"
      );
    } else if (setfilterStudent === "Staff") {
      return data.filter((character) => character.hogwartsStaff === "Staff");
    } else {
      return data;
    }
  };

  // Función para aplicar el filtro Student - Staff - All
  const applyFilterHouse = (data) => {
    if (setfilterHouse === "All") {
      return data;
    } else if (setfilterHouse === "Gryffindor") {
      return data.filter((character) => character.house === "Gryffindor");
    } else if (setfilterHouse === "Hufflepuff") {
      return data.filter((character) => character.house === "Gryffindor");
    } else if (setfilterHouse === "Ravenclaw") {
      return data.filter((character) => character.house === "Gryffindor");
    } else if (setfilterHouse === "Slytherin") {
      return data.filter((character) => character.house === "Gryffindor");
    } else {
      return data;
    }
  };

  // Función para aplicar el filtro por nombre
  const applyFilterName = (data, setfilterCharacter) => {
    if (!setfilterCharacter) {
      return <p>There is no character with that name. Please try again </p>;
    } 
    else {
      return data.filter((character) =>
        character.name.toLowerCase().includes(setfilterCharacter.toLowerCase())
      );
    }
  };

  // Función para el filtro de genero:
  const applyFilterGender = (data, setfilterGender) => {
    if (setfilterGender === "all") {
      return data;
    } else {
      return data.filter((character) => {
        if (setfilterGender === "female") {
          return character.gender === "female";
        } else if (setfilterGender === "male") {
          return character.gender === "male";
        }
      });
    }
  };

  //Función para el filtro de status (vivo o muerto):
  const applyFilterAlive = (data) => {
    if (setfilterAlive === "All") {
      return data;
    } 
    else if (setfilterAlive === "alive") {
      return data.filter((character) => character.alive === "true")
    } 
    else (setfilterAlive === "dead") 
      {return data.filter((character) => character.alive === "false")
    }
  };

  // 4. variables para el html

  const datacharacters = [...characters];

  //Para los filtros:

  //filtros - uno engloba al otro:
  const filteredCharacterbyName = applyFilterName(
    datacharacters,
    setfilterStudent
  );
  const filteredCharactersByStudent = applyFilterStudent(
    filteredCharacterbyName,
    setfilterStudent
  );
  const filteredCharactersByHouse = applyFilterHouse(
    filteredCharactersByStudent,
    setfilterHouse
  );
  const filteredCharactersByGender = applyFilterGender(
    filteredCharactersByHouse,
    setfilterGender
  );
  const filteredCharacters = applyFilterAlive(
    filteredCharactersByGender,
    setfilterAlive
  );

  //para la pagina de Details:
  const findCharacter = (id) => {
    return characters.find((character) => character.id === id);
  };

  // 5. Html en el return

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="col2">
              <div>
                <Filters
                  filterCharacter={filterCharacter}
                  filterStudent={filterStudent}
                  filterHouse={filterHouse}
                  filterGender={filterGender}
                  filterAlive={filterAlive}
                  handleFilterCharacter={handleFilterCharacter}
                  handleFilterStudent={handleFilterStudent}
                  handleFilterHouse={handleFilterHouse}
                  handleFilterGender={handleFilterGender}
                  handleFilterAlive={handleFilterAlive}
                />
              </div>
              <div>
                <CharacterList characters={filteredCharacters} />
              </div>
            </div>
          }
        />
        <Route
          path="/character/:id"
          element={<CharacterDetail findCharacter={findCharacter} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
