import "../../scss/App.scss";
import PropTypes from "prop-types";

function FilterByGender({ filterGender, handleFilterGender }) {
  const handleChangeGender = (event) => {
    handleFilterGender(event.currentTarget.id, event.currentTarget.value);
  };

  return (
    <div className="col2 mt-1">
      <fieldset>
        Gender:
        <div>
          <input
            type="radio"
            name="gender"
            id="All"
            value="All"
            checked={filterGender === "All"}
            onChange={handleChangeGender}
          />
          <label htmlFor="All"> All</label>

          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={filterGender === "female"}
            onChange={handleChangeGender}
          />
          <label htmlFor="female"> Female</label>

          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={filterGender === "male"}
            onChange={handleChangeGender}
          />
          <label htmlFor="male"> Male</label>
        </div>
      </fieldset>
    </div>
  );
}

FilterByGender.propTypes = {
  filterGender: PropTypes.string,
  handleFilterGender: PropTypes.func,
};

export default FilterByGender;
