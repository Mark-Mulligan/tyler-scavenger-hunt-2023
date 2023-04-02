// React Router Dom
import { Link } from 'react-router-dom';

// images
import marioTitle from '../images/Mario_Series_Logo.svg';
import mario from '../images/mario.png';

// styles
import '../styles/pages/Home.scss';

const Home = () => {
  return (
    <div className="home">
      <img src={marioTitle} alt="Super Mario" height={100} width={200} />
      <h1 className="title secondaryFont">SCAVENGER HUNT</h1>
      <Link to="/instructions" className="btn">
        LET&apos;S GO!
      </Link>

      <img src={mario} alt="Mario" />
    </div>
  );
};

export default Home;
