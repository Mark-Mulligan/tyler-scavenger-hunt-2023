// React Router Dom
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Instructions from './pages/Instructions';
import Lakitu from './pages/Lakitu';
import NoMatch from './pages/NoMatch';
import Question from './pages/Question';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/instructions" element={<Instructions />} />
      <Route path="/lakitu" element={<Lakitu />} />
      <Route
        path="/question1"
        element={
          <Question
            title="Question 1"
            riddle="How many carts are on the Grandscape ferris wheel? (enter a number)"
            answer="42"
            next="/question2"
          />
        }
      />

      <Route
        path="/question2"
        element={
          <Question
            title="Question 2"
            riddle="What color is a golden steed's saddle covering?"
            answer="red"
            next="/question3"
          />
        }
      />

      <Route
        path="/question3"
        element={
          <Question
            title="Question 3"
            riddle="What name is below the Grandscape tower pool?"
            answer="1 fnbo plaza"
            next="/question4"
          />
        }
      />

      <Route
        path="/question4"
        element={
          <Question
            title="Question 4"
            riddle="Which store has a desert mascot that is suspect for having the munchies?"
            answer="the baked bear"
            next="/question5"
          />
        }
      />

      <Route
        path="/question5"
        element={
          <Question
            title="Question 5"
            riddle="What cinema is out of this world?"
            answer="galaxy theatres"
            next="/question6"
          />
        }
      />

      <Route
        path="/question6"
        element={
          <Question
            title="Question 6"
            riddle="What type of fish habitat is in Grandscape?"
            answer="invisible"
            next="/question7"
          />
        }
      />

      <Route
        path="/question7"
        element={
          <Question
            title="Question 7"
            riddle="Which building has painted walls of blue and a cowboy ridding into the sunset?"
            answer="the homestead"
            next="/question8"
          />
        }
      />

      <Route
        path="/question8"
        element={
          <Question
            title="Question 8"
            riddle="How many sport figure came out to watch Pauline's show on the amphitheater stage? (enter a number)"
            answer="4"
            next="/question9"
          />
        }
      />

      <Route
        path="/question9"
        element={
          <Question
            title="Question 9"
            riddle="What sits in front of the locked wall?"
            answer="bench"
            next="/question10"
          />
        }
      />

      <Route
        path="/question10"
        element={
          <Question
            title="Question 10"
            riddle="What is 35ft tall, has 432 video tiles, and a one of a kind wind driven anemometer?"
            answer="the kaleidoscope"
            next="/question11"
          />
        }
      />

      <Route
        path="/question11"
        element={
          <Question
            title="Question 11"
            riddle="What unusual red object is across the street and down stairs from the kaleidoscope?"
            answer="telephone booth"
            next="/question12"
          />
        }
      />

      <Route
        path="/question12"
        element={
          <Question title="Question 12" riddle="This will need to be filled in" answer="yes" next="/question12" />
        }
      />

      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
