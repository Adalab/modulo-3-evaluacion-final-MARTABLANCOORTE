import PropTypes from "prop-types";

import FilterbyHouse from './FilterbyHouse';

function FilterByStudent({ filterStudent, filterHouse, handleFilterStudent, handleFilterHouse }) {
    
    const handleInpuStudent = (event) => {
        handleFilterStudent(event.currentTarget.value);
    };
  
    return (
      <div className="col2 mt-1">
        <fieldset>House:
          <label htmlFor="student">
            <select name="student" id="student">
                <option value="All" onInput={handleInpuStudent}>All</option>
                <option value="Students" onInput={handleInpuStudent}>Students <FilterbyHouse filterHouse={filterHouse} handleFilterHouse={handleFilterHouse}/></option>
                <option value="Staff"onInput={handleInpuStudent}>Staff</option>
            </select>
          </label>
        </fieldset>
      </div>
    );
  }
  
  export default FilterByStudent;