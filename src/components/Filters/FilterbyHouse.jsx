import PropTypes from 'prop-types';

function FilterByHouse({ handleFilterHouse }) {
    
    const handleInputHouse = (event) => {
      handleFilterHouse(event.currentTarget.value);
    };
  
    return (
      <div className="col2 mt-1">
        <fieldset>House:
          <label htmlFor="house">
            <select name="house" id="house">
                <option value="Gryffindor" onInput={handleInputHouse}>Gryffindor</option>
                <option value="Hufflepuff"onInput={handleInputHouse}>Hufflepuff</option>
                <option value="Ravenclaw " onInput={handleInputHouse}>Ravenclaw</option>
                <option value="Slytherin" onInput={handleInputHouse}>Slytherin</option>
                <option value="All" onInput={handleInputHouse}>All</option>
            </select>
          </label>
        </fieldset>
      </div>
    );
  }

  FilterByHouse.propTypes = {
    //filterHouse: PropTypes.string,
    handleFilterHouse: PropTypes.func,
  }

export default FilterByHouse;