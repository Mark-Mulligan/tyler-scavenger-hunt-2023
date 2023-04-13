// React
import { FC } from 'react';

// styles
import '../styles/components/InstructionsModal.scss';

interface IProps {
  handleClose: () => void;
}

const InstructionsModal: FC<IProps> = ({ handleClose }) => {
  return (
    <div className="instructionsModal">
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
            <button className="btn" onClick={handleClose}>
              OK
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default InstructionsModal;
