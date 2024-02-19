export async function fetchCharacters() {
  const response = await fetch('https://hp-api.onrender.com/api/characters');
  const responseData = await response.json();
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
}

export default fetchCharacters;
//eachCharacter