import '../../scss/App.scss';
import { Link } from 'react-router-dom';
import PropTypes  from "prop-types";
import defaultPhoto from '../../images/HogwartsEscudo.png';

function CharacterCard ({ character }) {
  return (
    <Link to={"/character/"+ character.name} >
    <div className="details">
        <img
          className='card__img'
          src={character.image || defaultPhoto}
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

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired
  }).isRequired
}

export default CharacterCard;