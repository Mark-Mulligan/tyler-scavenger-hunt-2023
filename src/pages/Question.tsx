// React
import React, { FC, ReactNode, useState, useContext, useEffect } from 'react';

// react-router-dom
import { Navigate } from 'react-router-dom';

// react-scroll
import { animateScroll } from 'react-scroll';

// images
import questionBlock from '../images/questionBlock.webp';
import mushroom from '../images/mushroom.webp';

// components
import WrongAnswerModal from '../components/WrongAnswerModal';
import CorrectAnswerModal from '../components/CorrectAnswerModal';
import InstructionsModal from '../components/InstructionsModal';

// Context
import { AppContext } from '../context/AppContext';

// styles
import '../styles/pages/Question.scss';

interface IProps {
  title: string;
  riddle: ReactNode;
  answer: string;
  hint: string;
  next: string;
  previousQuestion: string | null;
}

const Question: FC<IProps> = ({ title, riddle, answer, hint, next, previousQuestion }) => {
  const { completedQuestions, setCompletedQuestions } = useContext(AppContext);

  const [userInput, setUserInput] = useState('');
  const [showInstructions, setShowInstructions] = useState(false);
  const [showTube, setShowTube] = useState(false);
  const [showWrongAnswer, setShowWrongAnswer] = useState(false);
  const [showCorrectAnswerModal, setShowCorrectAnswerModal] = useState(false);

  const [timeBeforeShowingHint, setTimeBeforeShowingHint] = useState(10);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    animateScroll.scrollToTop({ delay: 0, duration: 100 });

    if (userInput.toLowerCase() === answer) {
      setShowCorrectAnswerModal(true);

      if (!completedQuestions.includes(title)) {
        setCompletedQuestions([...completedQuestions, title]);
        localStorage.setItem('completedQuestions', JSON.stringify([...completedQuestions, title]));
      }
    } else {
      setShowWrongAnswer(true);
    }
  };

  useEffect(() => {
    setTimeBeforeShowingHint(10);

    const countdown = setInterval(() => {
      setTimeBeforeShowingHint((prev) => {
        if (prev > 0) return prev - 1;
        else {
          clearInterval(countdown);
          return 0;
        }
      });
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, [title]);

  if (previousQuestion !== null && completedQuestions.includes(previousQuestion) === false) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="question">
      <div className="menuContainer">
        <img
          className="menuItem"
          height={50}
          width={50}
          src={mushroom}
          alt="Mushroom Menu"
          onClick={() => setShowInstructions(true)}
        />

        {timeBeforeShowingHint > 0 ? (
          <span>Hint Available in {timeBeforeShowingHint}</span>
        ) : (
          <div className="hintContainer">
            <img
              className="menuItem"
              height={50}
              width={50}
              src={questionBlock}
              alt="hint"
              onClick={() => setShowTube(!showTube)}
            />
          </div>
        )}
      </div>

      <div className="questionContainer">
        <h2>{title} of 14</h2>
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
          <h2 className="title">Hint</h2>
          <p className="content">{hint}</p>
          <button className="btn" onClick={() => setShowTube(false)}>
            Close
          </button>
        </div>
      </div>
      {showInstructions && <InstructionsModal handleClose={() => setShowInstructions(false)} />}
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
