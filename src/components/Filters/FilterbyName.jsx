import PropTypes from "prop-types";

function FilterByCharacter(filterCharacter, handleFilterCharacter) {

  const handleInputCharacter = (event) => {
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

export default FilterByCharacter;
