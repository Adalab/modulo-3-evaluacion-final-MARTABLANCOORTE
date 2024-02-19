import '../../scss/App.scss';
import PropTypes from 'prop-types';


function FilterByStudent({handleFilterStudent}) {
    
    const handleInputStudent = (event) => {
        handleFilterStudent(event.currentTarget.value);
    };
  
    return (
      <div className="col2 mt-1">
        <fieldset>Status:
          <label htmlFor="student">
            <select name="student" id="student" onInput={handleInputStudent}>
                <option value="All" >All Characters</option>
                <option value="Students">Hogwarts Students</option>
                <option value="Staff">Hogwarts Staff</option>
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