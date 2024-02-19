import '../../scss/App.scss';
import { Link } from 'react-router-dom';

function Notfound () {
  return (
    <div>
        <Link to="/">Come back</Link>
        <h2>404 - Not Found</h2>
        <p>The character you are looking for not exist.</p>
    </div>
  );
}

export default Notfound;