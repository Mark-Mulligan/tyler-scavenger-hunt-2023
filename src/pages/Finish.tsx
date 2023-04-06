// React
import { useContext } from 'react';

// react-router-dom
import { Navigate, Link } from 'react-router-dom';

// Context
import { AppContext } from '../context/AppContext';

// styles
import '../styles/pages/Finish.scss';

const Finish = () => {
  const { completedQuestions } = useContext(AppContext);

  if (!completedQuestions || completedQuestions.length < 14) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="finish">
      <Link className="btn" to="/">
        Play Again?
      </Link>
    </div>
  );
};

export default Finish;
