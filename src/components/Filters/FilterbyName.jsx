import "../scss/App.scss";
import PropTypes from 'prop-types';

function FilterByCharacter(handleFilterCharacter) {

  const handleInputCharacter = (event) => {
    event.preventDefault();
    handleFilterCharacter(event.currentTarget.value);
  };

  return (
    <div className="col2 mt-1">
      <fieldset>
        <label> Character Name:
          <input type="text" placeholder="Harry Potter" onInput={handleInputCharacter}/>
        </label>
      </fieldset>
    </div>
  );
}

FilterByCharacter.propTypes = {
  //filterCharacter: PropTypes.string,
  handleFilterCharacter: PropTypes.func,
}

export default FilterByCharacter;
