// React Router Dom
import { Link } from 'react-router-dom';

// Styles
import '../styles/pages/Instructions.scss';

const Instructions = () => {
  return (
    <div className="instructions">
      <div className="instructionsContainer">
        <h1>Instructions</h1>
        <ul>
          <li>
            Answer each clue by finding a star! The star&apos;s answer will allow you to continue to the next clue.
          </li>
          <li>
            If you have trouble with the clue, you can reveal a hint by hitting &#8220;?&#8221; block, but only after
            obtaining enough gold coins! Each hint is worth 3 coins.
          </li>
          <li>
            To obtain gold coins, you must correctly answer trivia questions for Mario and his gang. Correct blank
            answers receive 3 coins, correct multiple choice answers receive 1 coin.
          </li>
          <li>Collection all 10 stars to win the hunt!</li>
          <li>If you need to review these rules, just click on the mushroom icon on the top.</li>
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
