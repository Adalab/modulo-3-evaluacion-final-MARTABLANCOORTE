import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

function CharacterCard ({ character }) {
  return (
    <Link to={"/character/"+ character.id}>
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
              {character.house} / {character.species}
            </p>
        </div>
    </div>
    </Link>
  );
}

export default CharacterCard;