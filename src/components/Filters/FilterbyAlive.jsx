import "../scss/App.scss";
import PropTypes from 'prop-types';

function FilterByAlive({ filterAlive, handleFilterAlive }) {
    
    const handleChangeAlive = (event) => {
        handleFilterAlive(event.currentTarget.id, event.currentTarget.checked);
    };

    return (
      <div className="col2 mt-1">
        <fieldset>Status:
            <div>
                <input
                    type="checkbox"
                    name="status"
                    id="alive"
                    value="alive"
                    checked={filterAlive === "alive"} //true
                    onInput={handleChangeAlive}
                />
                <label htmlFor="alive"> Alive</label>
                
                <input
                    type="checkbox"
                    name="status"
                    id="dead"
                    value="dead"
                    checked={filterAlive === "dead"} //false
                    onInput={handleChangeAlive}
                />
                <label htmlFor="dead"> Dead</label>
        
                <input
                    type="checkbox"
                    name="status"
                    id="allstatus"
                    value="allstatus"
                    checked={filterAlive === "all"}
                    onInput={handleChangeAlive}
                />
                <label htmlFor="allstatus"> All</label>
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