export function fetchCharacters() {
  return fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((reponseData) => {
      return reponseData.results.map((eachCharacter) => {
        return {
          id: eachCharacter.id,
          name: eachCharacter.name,
          image: eachCharacter.image,
          species: eachCharacter.species,
          house: eachCharacter.house,
          alive: eachCharacter.alive,
          hogwartsStaff: eachCharacter.hogwartsStaff,
          hogwartsStudent: eachCharacter.hogwartsStudent,
          patronus: eachCharacter.patronus,
          wandWood: eachCharacter.wand.wood,
          wandCore: eachCharacter.wand.core,
          wandLength: eachCharacter.wand.wood.length,
        };
      });
    });
}
