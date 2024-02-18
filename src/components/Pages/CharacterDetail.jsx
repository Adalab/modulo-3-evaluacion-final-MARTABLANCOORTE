import propTypes from "prop-types";
import {  Link, useParams } from "react-router-dom";

function CharacterDetail({ findCharacter }) {

  const params = useParams();

  const character = findCharacter(params.id)

  return (
    <div className="details">
      <img
        className='card__img'
        src={character.image}
        alt='Photo Character'
        title='Photo Character'
      />
      <div>
        <h2 className='card__title'>{character.name}</h2>
        <p className='card__description'>
            {character.hogwartsStaff}
            {character.hogwartsStudent}
            {character.house}
            {character.species}
            {character.alive}
            {character.patronus}
            {character.wandWood}
            {character.wandCore}
            {character.wandLength}  
        </p>
        <Link to="/">Come back</Link>
      </div>
    </div>
  );
}

CharacterDetail.propTypes = {

};

export default CharacterDetail;