// react
import { useEffect } from 'react';

// React Router Dom
import { Link } from 'react-router-dom';

// react-scroll
import { animateScroll } from 'react-scroll';

// images
import lakitu from '../images/Lakitu.png';

// styles
import '../styles/pages/Lakitu.scss';

const Lakitu = () => {
  useEffect(() => {
    animateScroll.scrollToTop({ delay: 0, duration: 100 });
  }, []);

  return (
    <div className="lakituPage">
      <img className="lakitu" src={lakitu} alt="lakitu" height={176} width={160} />

      <div className="cd-number-wrapper secondaryFont">
        <span className="cd-number-three">3</span>
        <span className="cd-number-two">2</span>
        <span className="cd-number-one">1</span>
        <Link to="/question1" className="btn goBtn go-btn">
          GO!
        </Link>
      </div>
    </div>
  );
};

export default Lakitu;
