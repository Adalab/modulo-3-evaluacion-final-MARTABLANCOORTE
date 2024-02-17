import PropTypes from "prop-types";
import FilterbyAlive from './FilterbyAlive';
import FilterbyGender from './FilterbyGender';
import FilterbyName from './FilterbyName';
import FilterbyStudent from './FilterbyStudent';

function Filters({ filterCharacter, filterStudent, filterGender, filterAlive, filterHouse, handleFilterCharacter, handleFilterStudent, handleChangeFilterGender, handleChangeFilterAlive, handleFilterHouse}) {
    return (
      <form>
        <fieldset className='title--medium'>Filters:
            <FilterbyName filterCharacter={filterCharacter} handleFilterCharacter={handleFilterCharacter} />
            <FilterbyStudent filterStudent={filterStudent} handleFilterStudent={handleFilterStudent} filterHouse={filterHouse} handleFilterHouse={handleFilterHouse}/>
            <FilterbyGender filterGender={filterGender} handleChangeFilterGender={handleChangeFilterGender } />
            <FilterbyAlive filterAlive={filterAlive} handleChangeFilterAlive={handleChangeFilterAlive}/>
        </fieldset>
      </form>
    );
  }
  
export default Filters;