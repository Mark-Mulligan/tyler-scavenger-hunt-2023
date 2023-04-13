// React
import { useEffect } from 'react';

// React Router Dom
import { Link } from 'react-router-dom';

// react-scroll
import { animateScroll } from 'react-scroll';

// Styles
import '../styles/pages/Instructions.scss';

const Instructions = () => {
  useEffect(() => {
    animateScroll.scrollToTop({ delay: 0, duration: 100 });
  }, []);

  return (
    <div className="instructions">
      <div className="instructionsContainer">
        <h1>Instructions</h1>
        <ul>
          <li>Answer each clue to win the scavenger hunt!</li>
          <li>Each correct answer will unlock the next clue</li>
          <li>
            If you have trouble with the clue, you can reveal a hint by hitting &#8220;?&#8221; block, but only after
            the time limit is up
          </li>
          <li>If you need to review these rules, just click on the mushroom icon on the top left</li>
          <div className="btnContainer">
            <Link to="/lakitu" className="btn">
              Ok
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Instructions;
