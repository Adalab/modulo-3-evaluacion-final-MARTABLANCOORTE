import '../../scss/App.scss';
import PropTypes from 'prop-types';
import FilterbyAlive from './FilterbyAlive';
import FilterbyGender from './FilterbyGender';
import FilterbyName from './FilterbyCharacter';
import FilterbyStudent from './FilterbyStudent';
import wand from '../../images/varita.png';
import FilterbyHouse from './FilterbyHouse';

function Filters({filterGender, filterAlive, handleFilterAlive,handleFilterCharacter, handleFilterStudent, handleResetFilters, handleFilterHouse, handleFilterGender}) {
    return (
      <form>
        <fieldset className='title--medium'>Filters:
            <FilterbyName handleFilterCharacter={handleFilterCharacter} />
            <FilterbyStudent handleFilterStudent={handleFilterStudent}/>
            <FilterbyHouse handleFilterHouse={handleFilterHouse}/>
            <FilterbyGender filterGender={filterGender} handleFilterGender={handleFilterGender}/>
            <FilterbyAlive filterAlive={filterAlive} handleFilterAlive={handleFilterAlive}/>
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

export default Filters;