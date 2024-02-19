import "../scss/App.scss";
import PropTypes from 'prop-types';
import FilterbyAlive from './FilterbyAlive';
import FilterbyGender from './FilterbyGender';
import FilterbyName from './FilterbyName';
import FilterbyStudent from './FilterbyStudent';
import wand from './images/varita.png'

function Filters({ filterCharacter, filterStudent, filterGender, filterAlive, filterHouse, handleFilterCharacter, handleFilterStudent, handleFilterGender, handleFilterAlive, handleFilterHouse, handleResetFilters}) {
    return (
      <form>
        <fieldset className='title--medium'>Filters:
            <FilterbyName filterCharacter={filterCharacter} handleFilterCharacter={handleFilterCharacter} />
            <FilterbyStudent filterStudent={filterStudent} handleFilterStudent={handleFilterStudent} filterHouse={filterHouse} handleFilterHouse={handleFilterHouse}/>
            <FilterbyGender filterGender={filterGender} handleChangeFilterGender={handleFilterGender } />
            <FilterbyAlive filterAlive={filterAlive} handleChangeFilterAlive={handleFilterAlive}/>
            <button onClick={handleResetFilters}>Reset
              <img src={wand} alt="Reset wand" />
            </button>
        </fieldset>
      </form>
    );
  }

Filters.propTypes = {
  filterCharacter: PropTypes.string,
  filterStudent: PropTypes.string,
  filterGender: PropTypes.string,
  filterAlive: PropTypes.string,
  filterHouse: PropTypes.string,
  handleFilterCharacter: PropTypes.func,
  handleFilterStudent: PropTypes.func,
  handleFilterGender: PropTypes.func,
  handleFilterAlive: PropTypes.func,
  handleFilterHouse: PropTypes.func,
}
  
export default Filters;