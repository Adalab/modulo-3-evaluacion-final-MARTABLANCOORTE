export function fetchCharacters() {
  return fetch('https://hp-api.onrender.com/api/characters')
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      return responseData.map((character) => {
        return {
          id: character.id,
          name: character.name,
          image: character.image,
          species: character.species,
          house: character.house,
          gender: character.gender,
          alive: character.alive,
          hogwartsStaff: character.hogwartsStaff,
          hogwartsStudent: character.hogwartsStudent,
          patronus: character.patronus,
          wandWood: character.wand.wood,
          wandCore: character.wand.core,
          wandLength: character.wand.wood.length,
          otherNames: character.alternate_names,
        };
      });
    });
}

export default fetchCharacters;
//eachCharacter