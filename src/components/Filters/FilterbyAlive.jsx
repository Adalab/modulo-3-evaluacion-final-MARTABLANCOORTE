import PropTypes from "prop-types";

function FilterByAlive({ filterAlive, handleChangeFilterAlive }) {
    
    const handleChangeAlive = (event) => {
        handleChangeFilterAlive(event.currentTarget.id, event.currentTarget.value);
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
                    checked={filterAlive === "alive"} // true
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
                    checked={filterAlive === "allstatus"} // true y false
                    onInput={handleChangeAlive}
                />
                <label htmlFor="allstatus"> All</label>
            </div>
        </fieldset>
      </div>
    );
  }
  
  export default FilterByAlive;