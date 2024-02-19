import '../../scss/App.scss';
import HarryPotter from '../../images/H1.png';


function header() {
  return (
    <header>
      <h1>HARRY POTTER</h1>
      <img src={HarryPotter} alt="Harry Potter" />
    </header>
  );
}

export default header
