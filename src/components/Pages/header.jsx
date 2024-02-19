import '../../scss/App.scss';
import HarryPotter from '../../images/H1.png';


function header() {
  return (
    <header>
      <img className="header" src={HarryPotter} alt="Harry Potter" />
    </header>
  );
}

export default header
