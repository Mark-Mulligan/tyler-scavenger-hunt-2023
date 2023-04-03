// React
import React, { FC, ReactNode, useState } from 'react';

// images
import questionBlock from '../images/questionBlock.webp';
import mushroom from '../images/mushroom.webp';
import coin from '../images/coin.webp';

// components
import WrongAnswerModal from '../components/WrongAnswerModal';
import CorrectAnswerModal from '../components/CorrectAnswerModal';

// styles
import '../styles/pages/Question.scss';

interface IProps {
  title: string;
  riddle: ReactNode;
  answer: string;
  next: string;
}

const Question: FC<IProps> = ({ title, riddle, answer, next }) => {
  const [userInput, setUserInput] = useState('');
  const [showTube, setShowTube] = useState(false);
  const [showWrongAnswer, setShowWrongAnswer] = useState(false);
  const [showCorrectAnswerModal, setShowCorrectAnswerModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(userInput);

    if (userInput.toLowerCase() === answer) {
      setShowCorrectAnswerModal(true);
    } else {
      setShowWrongAnswer(true);
    }
  };

  return (
    <div className="question">
      <div className="menuContainer">
        <img className="menuItem" height={60} width={60} src={mushroom} alt="Mushroom Menu" />
        <img className="menuItem" height={60} width={60} src={coin} alt="coin" onClick={() => setShowTube(!showTube)} />
        <img className="menuItem" height={60} width={60} src={questionBlock} alt="hint" />
      </div>

      <div className="questionContainer">
        <h2>{title}</h2>
        <p>{riddle}</p>
        <form onSubmit={handleSubmit} className="answerContainer">
          <div className="inputContainer">
            <input
              className="input"
              style={{ textAlign: 'center' }}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="btn">
              Answer
            </button>
          </div>
        </form>
      </div>

      <div className={`tube ${showTube ? 'expanded' : 'hidden'}`}>
        <div className="coinQuestion">
          <h2 className="title">Title Will Go Here</h2>
          <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis.</p>
        </div>
      </div>
      {showWrongAnswer && <WrongAnswerModal handleClose={() => setShowWrongAnswer(false)} />}
      {showCorrectAnswerModal && (
        <CorrectAnswerModal
          next={next}
          handleClose={() => {
            setShowCorrectAnswerModal(false);
            setUserInput('');
          }}
        />
      )}
    </div>
  );
};

export default Question;
