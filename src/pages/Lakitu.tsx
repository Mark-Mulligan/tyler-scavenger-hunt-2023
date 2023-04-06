// React Router Dom
import { Link } from 'react-router-dom';

// images
import lakitu from '../images/Lakitu.png';

// styles
import '../styles/pages/Lakitu.scss';

const Lakitu = () => {
  return (
    <div className="lakituPage">
      <img className="lakitu" src={lakitu} alt="lakitu" height={220} width={200} />
      <Link to="/question1" className="btn goBtn">
        GO!
      </Link>
    </div>
  );
};

export default Lakitu;
