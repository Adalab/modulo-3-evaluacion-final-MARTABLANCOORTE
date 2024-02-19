import '../../scss/App.scss';
import PropTypes from "prop-types";
import { useParams } from "react";
import { Link } from "react-router-dom";
import GImage from '../../images/gryffindorescudo.jpg';
import SImage from '../../images/slytherinescudo.jpg';
import HImage from '../../images/Hufflepuffescudo.jpg';
import RImage from '../../images/ravenclawescudo.jpg';
import StaffImage from '../../images/HogwartsEscudo.png';
import pergamino from '../../images/parchment.jpg';
import sello from '../../images/sello.png';
import aliveImage from '../../images/corazon.png';
import deadImage from '../../images/cementerio.png';

function CharacterDetail({ findCharacter }) {

  const params = useParams();
  const character = findCharacter(params.id)

    // Define las imágenes para las casas y el escudo de Staff: 
    const houseImage = {
      Gryffindor: GImage,
      Hufflepuff: HImage,
      Ravenclaw:RImage,
      Slytherin: SImage,
      Staff:StaffImage,
    };

  return (
    <div className="details">
      <h2>CHARACTER DETAILS</h2>
      <img
          className='image-back'
          src={sello}
          alt='Pergamino fondo'
          title='Pergamino fondo'
      />  
      <div className="image-container">
        <img
            className='image-front'
            src={character.image}
            alt='Photo Character'
            title='Photo Character'
        />
        <img
            className='image-back'
            src={pergamino}
            alt='Pergamino fondo'
            title='Pergamino fondo'
        />      
      </div>
      <div>
        <h2 className='card__title'>{character.name}</h2>
        <p className='card__description'>
            {character.hogwartsStaff}
            {character.hogwartsStudent}
            {character.house}
            {character.species}
            {character.alive ? <img src={aliveImage} alt="alive" style={{ width: '10px', height: '10px' }} /> : <img src={deadImage} alt="dead" style={{ width: '10px', height: '10px' }} />}
            {character.patronus}
            {character.wandWood}
            {character.wandCore}
            {character.wandLength}
            {character.otherNames} 
        </p>
        </div>
      <div>
        <Link to="/">Come back</Link>
        <img // Obtén la imagen según la casa
            className='card__img'
            src={houseImage[character.house.toLowerCase()]}
            alt='House Character'
            title='House Character'
        />
      </div>
    </div>
  );
}

CharacterDetail.propTypes = {
  findCharacter: PropTypes.func
};

export default CharacterDetail;