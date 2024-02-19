import '../../scss/App.scss';
import PropTypes from "prop-types";
import { useParams } from 'react-router-dom';
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
import defaultPhoto from '../../images/HogwartsEscudo.png';

function CharacterDetail({characterArray}) {
  
  const params = useParams();

  const findCharacter = (name) => {
    return characterArray.find((character) => character.name === name);
  };
    
  const character = findCharacter (params.name);


  // Define las imágenes para las casas y el escudo de Staff: 
    let houseImage = StaffImage;
     
      switch (character.house){
        case "Gryffindor":
          houseImage = GImage;
          break;
        case "Hufflepuff":
          houseImage = HImage;
          break;
        case "Ravenclaw":
          houseImage = RImage;
          break;
        case "Slytherin":
          houseImage = SImage;
          break;
        default: 
          houseImage = StaffImage;
      }

  return (
    <div className="details">
      <h2>CHARACTER DETAILS {params.name}</h2>
      <img
          className='image-back'
          src={sello}
          alt='Pergamino fondo'
          title='Pergamino fondo'
      />  
      <div className="image-container">
        <img
            className='image-front'
            src={character.image || defaultPhoto} 
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
        <h2 className='card__title'>Name: {character.name}</h2>
        <p className='card__description'>
            Hogwarts Staff: {character.hogwartsStaff}
            Hogwarts Student: {character.hogwartsStudent}
            Hogwarts House: {character.house}
            Hogwarts Species: {character.species}
            Alive or Dead: {character.alive ? <img src={aliveImage} alt="alive" style={{ width: '10px', height: '10px' }} /> : <img src={deadImage} alt="dead" style={{ width: '10px', height: '10px' }} />}
            Patronus: {character.patronus}
            WandWood: {character.wandWood}
            WandCore: {character.wandCore}
            WandLength: {character.wandLength}
            OtherNames: {character.otherNames} 
        </p>
        </div>
      <div>
        <Link to="/">Come back</Link>
        <img // Obtén la imagen según la casa
            className='card__img'
            src= {houseImage}
            alt='House Character'
            title='House Character'
        />
      </div>
    </div>
  );
}

CharacterDetail.propTypes = {
  characterArray: PropTypes.array
};

export default CharacterDetail;