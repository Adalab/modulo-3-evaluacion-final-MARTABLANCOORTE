import "../scss/App.scss";

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Filters from "./Filters/Filters.jsx";
import CharacterList from "./Characters/CharacterList.jsx";
import CharacterDetail from "./Pages/CharacterDetail.jsx";
import ls from "../services/LocalStorage.js";
import fetchCharacters from "../services/fetch.js";
import Footer from "./Pages/footer.jsx";
import Header from "./Pages/header.jsx";
import Notfound from "./Pages/Notfound.jsx";

function App() {
  // 1. Variables de estado
  const [characterArray, setCharacterArray] = useState([]);
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
        setCharacterArray(data);
        ls.set("characters", data);
      });
    } else {
      setCharacterArray(ls.get("characters"));
    }
  }, []);

  // 3. funciones de eventos

  // Función para manejar el cambio en los filtros
  const handleFilterCharacter = (value) => {
    setfilterCharacter(value);
    applyFilterName();
  };

  const handleFilterStudent = (value) => {
    setfilterStudent(value);
    applyFilterStudent (value);
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

  // Función para aplicar el filtro por nombre
  const applyFilterName = () => {
    if (filterCharacter) {
      const CharacterfilteredbyName = characterArray.filter((character) =>
        character.name.toLowerCase().includes(filterCharacter.toLowerCase())
      );
      setCharacterArray(CharacterfilteredbyName);
    }
  };


  // Función para aplicar el filtro Student - Staff - All
  const applyFilterStudent = (filterStudent) => {
    let CharacterfileredbyStatus;

    if (filterStudent === "Students") {
      CharacterfileredbyStatus = characterArray.filter((character) => character.hogwartsStudent );
    } else if (filterStudent === "Staff") {
      CharacterfileredbyStatus = characterArray.filter((character) => character.hogwartsStaff);
    } else {
      CharacterfileredbyStatus = characterArray;
    }
    setCharacterArray(CharacterfileredbyStatus);
  };

  /*// Función para aplicar el filtro Student - Staff - All
  const applyFilterHouse = (data) => {
    if (filterHouse === "All") {
      return data;
    } else if (filterHouse === "Gryffindor") {
      return data.filter((character) => character.house === "Gryffindor");
    } else if (filterHouse === "Hufflepuff") {
      return data.filter((character) => character.house === "Gryffindor");
    } else if (filterHouse === "Ravenclaw") {
      return data.filter((character) => character.house === "Gryffindor");
    } else if (filterHouse === "Slytherin") {
      return data.filter((character) => character.house === "Gryffindor");
    } else {
      return data;
    }
  };*/

  /*// Función para el filtrofilteredCharacter de genero:
  const applyFilterGender = (data) => {
    if (filterGender === "all") {
      return data;
    } else {
      return data.filter((character) => {
        if (filterGender === "female") {
          return character.gender === "female";
        } else if (filterGender === "male") {
          return character.gender === "male";
        }
      });
    }
  };*/

  /*//Función para el filtro de status (vivo o muerto):
  const applyFilterAlive = (data) => {
    if (filterAlive === "All") {
      return data;
    } else if (filterAlive === "alive") {
      return data.filter((character) => character.alive === "true");
    } else if (filterAlive === "dead") {
      return data.filter((character) => character.alive === "false");
    }
  };*/

  // 4. variables para el html

  /*const datacharacters = [...characterArray].sort((a, b) => {
    return -a.name.localeCompare(b.name);
  });
  */

  //Para los filtros:

  //filtros - uno engloba al otro:
  /*const filteredCharacterbyName = applyFilterName(
    datacharacters,
    setfilterCharacter
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
  );*/

  //para la pagina de Details:
  const findCharacter = (id) => {
    return characterArray.find((character) => character.id === id);
  };

  // Reset: resetear los filtros:
  const handleResetFilters = () => {
    setfilterCharacter("");
    setfilterStudent("all");
    setfilterHouse("Gryffindor");
    setfilterGender("all");
    setfilterAlive("all");
  };

  // 5. Html en el return

  return (
    <div className="page">
      <Header />
      <main>
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
                    handleResetFilters={handleResetFilters}
                  />
                </div>
                <div>
                  <CharacterList characterArray={characterArray}/>
                  {characterArray.length <= 0 && <p> There is no character with that name. Please try again </p>}

                </div>
              </div>
            }
          />
          <Route
            path="/character/:id"
            element={
              <CharacterDetail findCharacter={findCharacter} /> || <Notfound />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
