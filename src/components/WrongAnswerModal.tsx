// React
import { FC } from 'react';

// images
import bowser from '../images/bowser.png';

// styles
import '../styles/components/WrongAnswerModal.scss';

interface IProps {
  handleClose: () => void;
}

const WrongAnswerModal: FC<IProps> = ({ handleClose }) => {
  return (
    <div className="wrongAnswerModal">
      <div className="bowserContainer">
        <img className="bowser" src={bowser} alt="bowser" />
      </div>

      <h1 className="secondaryFont">WRONG ANSWER!</h1>
      <button className="btn" onClick={handleClose}>
        TRY AGAIN
      </button>
    </div>
  );
};

export default WrongAnswerModal;
