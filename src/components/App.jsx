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
    } else {
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
  };

  const handleFilterGender = (value) => {
    setfilterGender(value);
  };

  const handleFilterAlive = (value) => {
    setfilterAlive(value);
  };

  const filterbyName = (character) =>
    character.name.toLowerCase().includes(filterCharacter.toLowerCase());

  const filteredCharacters = characterArray
    .filter(filterbyName)
    .filter((character) => {
      if (filterStudent === "Students") {
        return character.hogwartsStudent;
      } else if (filterStudent === "Staff") {
        return character.hogwartsStaff;
      } else {
        return true;
      }
    })
    .filter((character) => {
      if (filterHouse !== "All") {
        return character.house === filterHouse;
      } else {
        return true;
      }
    })
    .filter((character) => {
      if (filterGender === "female" || filterGender === "male") {
        return character.gender === filterGender;
      } else {
        return true;
      }
    })
    .filter((character) => {
      return (
        (filterAlive === "Alive" && character.alive) ||
        (filterAlive === "Dead" && !character.alive) ||
        (filterAlive === "All")
      );
    })
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

  // 4. variables para el html

  // Reset: resetear los filtros:
  const handleResetFilters = () => {
    setfilterCharacter("");
    setfilterStudent("All");
    setfilterHouse("Gryffindor");
    setfilterGender("All");
    setfilterAlive("All");
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
                  <CharacterList characterArray={filteredCharacters} />
                  {characterArray.length <= 0 && (
                    <p>
                      {" "}
                      There is no character with that name. Please try again{" "}
                    </p>
                  )}
                </div>
              </div>
            }
          />
          <Route
            path="/character/:name" 
            element={
              <>
                <CharacterDetail characterArray={characterArray} /> || <Notfound />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
