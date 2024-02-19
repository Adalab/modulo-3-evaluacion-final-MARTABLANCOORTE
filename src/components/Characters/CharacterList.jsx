import "../../scss/App.scss";
import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

function CharacterList({ characterArray }) {
  if (characterArray) {
    const renderCharacters = characterArray.map((character) => {
      return (
        <li className="card" key={character.id}>
          <CharacterCard character={character} />
        </li>
      );
    });
    return (
      <section className="contacts">
        <h2 className="contacts__title title--medium">CHARACTER LIST</h2>
        <ul className="cards">{renderCharacters}</ul>
      </section>
    );
  }
}

CharacterList.propTypes = {
  characterArray: PropTypes.array,
};

export default CharacterList;
