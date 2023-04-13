// React
import { FC } from 'react';

// react-router-dom
import { Link } from 'react-router-dom';

// images
import marioAndLuigi from '../images/marioAndLuigi.png';

// styles
import '../styles/components/CorrectAnswerModal.scss';

interface IProps {
  next: string;
  handleClose: () => void;
  finalQuestion?: boolean;
}

const CorrectAnswerModal: FC<IProps> = ({ next, handleClose, finalQuestion }) => {
  return (
    <div className="correctAnswerModal">
      <div className="marioAndLuigiContainer">
        <img className="marioAndLuigi" src={marioAndLuigi} alt="marioAndLuigi" />
      </div>

      <h1 className="secondaryFont">WAHOO!</h1>
      {finalQuestion && (
        <p className="secondaryFont instructionsText">
          GO TO <br /> THE TRUCK YARD
        </p>
      )}
      <Link className="btn" to={next} onClick={handleClose}>
        {next === '/finish' ? 'Next' : 'Next Question'}
      </Link>
    </div>
  );
};

export default CorrectAnswerModal;
