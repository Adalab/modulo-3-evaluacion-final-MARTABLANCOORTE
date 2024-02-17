import PropTypes from "prop-types";

function FilterByGender({ filterGender, handleChangeFilterGender }) {
    
    const handleChangeGender = (event) => {
      handleChangeFilterGender(event.currentTarget.id, event.currentTarget.value);
    };
  
    return (
      <div className="col2 mt-1">
        <fieldset>Gender:
        <div>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={filterGender === "female"}
            onInput={handleChangeGender}
          />
          <label htmlFor="female"> Female</label>
          
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={filterGender === "male"}
            onInput={handleChangeGender}
          />
          <label htmlFor="male"> Male</label>
  
          <input
            type="radio"
            name="gender"
            id="all"
            value="all"
            checked={filterGender === "all"}
            onInput={handleChangeGender}
          />
          <label htmlFor="all"> All</label>
        </div>
      </fieldset>
    </div>
  );
}
  
export default FilterByGender