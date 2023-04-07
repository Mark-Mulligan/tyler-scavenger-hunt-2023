// React Router Dom
import { Link } from 'react-router-dom';

// images
import lakitu from '../images/Lakitu.png';

// styles
import '../styles/pages/Lakitu.scss';

const Lakitu = () => {
  return (
    <div className="lakituPage">
      <img className="lakitu" src={lakitu} alt="lakitu" height={176} width={160} />
      <Link to="/question1" className="btn goBtn">
        3-2-1 GO!
      </Link>
    </div>
  );
};

export default Lakitu;
