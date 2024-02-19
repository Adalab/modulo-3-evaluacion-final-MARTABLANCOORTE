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
  const [filterStudent, setfilterStudent] = useState("All");
  const [filterHouse, setfilterHouse] = useState("Gryffindor");
  const [filterGender, setfilterGender] = useState("All");
  const [filterAlive, setfilterAlive] = useState("All");

  // 2. useEffect

  useEffect(() => {
    // Cuando carga la página
    if (!ls.includes("characters")) {
      fetchCharacters().then((data) => {
        setCharacterArray(data);
        ls.set("characters", data);
      });
    } else{
      setCharacterArray(ls.get("characters"));
    }
  }, []);

  // 3. funciones de eventos

  // Función para manejar el cambio en los filtros
  const handleFilterCharacter = (value) => {
    setfilterCharacter(value);
  };

  const handleFilterStudent = (value) => {
    setfilterStudent(value);
  };

  const handleFilterHouse = (value) => {
    setfilterHouse(value);

    console.log(value);
  };

  const handleFilterGender = (value) => {
    setfilterGender(value);
  };

  const handleFilterAlive = (value) => {
    setfilterAlive(value);
  };

  const filterbyName = (character) => character.name.toLowerCase().includes(filterCharacter.toLowerCase());

  const filteredCharacters = 
    characterArray
      .filter(filterbyName)
      .filter((character) => {
        if (filterStudent === "Students") {
          return character.hogwartsStudent;
        } 
        else if (filterStudent === "Staff") {
          return character.hogwartsStaff;
        } 
        else {
          return true;
        }
      })
      .filter ((character) => {
        console.log(filterHouse,character.house);
        if (filterHouse !== "All") {
          return character.house === filterHouse;
        } 
        else {
          return true;
        }
      });

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
                  <CharacterList characterArray={filteredCharacters}/>
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
