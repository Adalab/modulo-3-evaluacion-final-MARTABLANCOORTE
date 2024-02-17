import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

function CharacterList({ charaters }) {
  const renderCharacters = characters.map((character) => {
    return (
      <li className="card" key={character.id}>
        <CharacterCard character={character} />
      </li>
    );
  });
  return (
    <section className="contacts">
      <h2 className="contacts__title title--medium">Character List</h2>
      <ul className="cards">{renderCharacters}</ul>
    </section>
  );
}

export default CharacterList;