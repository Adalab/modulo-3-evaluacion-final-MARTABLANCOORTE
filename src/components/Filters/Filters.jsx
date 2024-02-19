import '../../scss/App.scss';
import PropTypes from 'prop-types';
//import FilterbyAlive from './FilterbyAlive';
//import FilterbyGender from './FilterbyGender';
import FilterbyName from './FilterbyCharacter';
import FilterbyStudent from './FilterbyStudent';
import wand from '../../images/varita.png';

function Filters({ filterCharacter, filterStudent, filterHouse, handleFilterCharacter, handleFilterStudent, handleResetFilters, handleFilterHouse}) {
    return (
      <form>
        <fieldset className='title--medium'>Filters:
            <FilterbyName filterCharacter={filterCharacter} handleFilterCharacter={handleFilterCharacter} />
            <FilterbyStudent filterStudent={filterStudent} handleFilterStudent={handleFilterStudent} filterHouse={filterHouse} handleFilterHouse={handleFilterHouse}/>
            <button onClick={handleResetFilters}>Reset
              <img src={wand} alt="Reset wand" style={{ width: '20px', height: '20px' }} />
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
  handleResetFilters: PropTypes.func,
  handleFilterCharacter: PropTypes.func,
  handleFilterStudent: PropTypes.func,
  handleFilterGender: PropTypes.func,
  handleFilterAlive: PropTypes.func,
  handleFilterHouse: PropTypes.func,
}

//filterGender, filterAlive, handleFilterGender, handleFilterAlive
//<FilterbyGender filterGender={filterGender} handleChangeFilterGender={handleFilterGender }/>
//<FilterbyAlive filterAlive={filterAlive} handleChangeFilterAlive={handleFilterAlive}/>

export default Filters;