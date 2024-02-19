import '../../scss/App.scss';
import PropTypes from 'prop-types';

function FilterByAlive({ filterAlive, handleFilterAlive }) {
    
    const handleChangeAlive = (event) => {
        handleFilterAlive(event.currentTarget.value);
    };

    return (
      <div className="col2 mt-1">
        <fieldset>Status:
            <div>
                <input
                    type="checkbox"
                    name="status"
                    id="Alive"
                    value="Alive"
                    checked={filterAlive === "Alive"}
                    onChange={handleChangeAlive} 
                />
                <label htmlFor="Alive"> Alive</label>
                
                <input
                    type="checkbox"
                    name="status"
                    id="Dead"
                    value="Dead"
                    checked={filterAlive === "Dead"}
                    onChange={handleChangeAlive}
                />
                <label htmlFor="Dead"> Dead</label>
                
                <input
                    type="checkbox"
                    name="status"
                    id="All"
                    value="All"
                    checked={filterAlive === "All"}
                    onChange={handleChangeAlive}
                />
                <label htmlFor="All"> All</label>
            </div>
        </fieldset>
      </div>
    );
  }

  FilterByAlive.propTypes = {
    filterAlive: PropTypes.string,
    handleFilterAlive: PropTypes.func,
  }
  
  export default FilterByAlive;