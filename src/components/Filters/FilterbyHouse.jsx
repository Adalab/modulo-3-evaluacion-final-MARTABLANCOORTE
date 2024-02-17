import PropTypes from "prop-types";

function FilterByHouse({ filterHouse, handleFilterHouse }) {
    
    const handleInputHouse = (event) => {
      handleFilterHouse(event.currentTarget.value);
    };
  
    return (
      <div className="col2 mt-1">
        <fieldset>House:
          <label htmlFor="house">
            <select name="house" id="house">
                <option value="All" onInput={handleInputHouse}>All</option>
                <option value="Gryffindor" onInput={handleInputHouse}>Gryffindor</option>
                <option value="Hufflepuff"onInput={handleInputHouse}>Hufflepuff</option>
                <option value="Ravenclaw " onInput={handleInputHouse}>Ravenclaw</option>
                <option value="Slytherin" onInput={handleInputHouse}>Slytherin</option>
            </select>
          </label>
        </fieldset>
      </div>
    );
  }
  
  export default FilterByHouse;