import '../../scss/App.scss';
import PropTypes from 'prop-types';

function FilterByHouse({ handleFilterHouse }) {
    
    const handleInputHouse = (event) => {
      handleFilterHouse(event.currentTarget.value);
    };
  
    return (
        <div className="col2 mt-1" >
          <label htmlFor="house">House:
            <select name="house" id="house" onInput={handleInputHouse}>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Ravenclaw">Ravenclaw</option>
                <option value="Slytherin">Slytherin</option>
                <option value="All">All</option>
            </select>
          </label>
        </div>
    );
  }

  FilterByHouse.propTypes = {
    //filterHouse: PropTypes.string,
    handleFilterHouse: PropTypes.func,
  }

export default FilterByHouse;