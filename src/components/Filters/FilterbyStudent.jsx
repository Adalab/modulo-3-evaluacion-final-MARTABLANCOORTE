import PropTypes from 'prop-types';
import FilterbyHouse from './FilterbyHouse';

function FilterByStudent({handleFilterStudent, handleFilterHouse }) {
    
    const handleInputStudent = (event) => {
        handleFilterStudent(event.currentTarget.value);
    };
  
    return (
      <div className="col2 mt-1">
        <fieldset>House:
          <label htmlFor="student">
            <select name="student" id="student" onInput={handleInputStudent}>
                <option value="All" >All</option>
                <option value="Students">Students <FilterbyHouse handleFilterHouse={handleFilterHouse}/></option>
                <option value="Staff">Staff</option>
            </select>
          </label>
        </fieldset>
      </div>
    );
  }

FilterByStudent.propTypes = {
    handleFilterStudent: PropTypes.func,
    handleFilterHouse: PropTypes.func,
  }
    
export default FilterByStudent;