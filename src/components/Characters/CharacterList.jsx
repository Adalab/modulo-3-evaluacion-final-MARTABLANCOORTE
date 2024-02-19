import '../../scss/App.scss';
import CharacterCard from './CharacterCard';
import PropTypes from "prop-types";

function CharacterList({ characters }) {
  if (characters){
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
}}

CharacterList.propTypes = {
  characters: PropTypes.array
};

export default CharacterList