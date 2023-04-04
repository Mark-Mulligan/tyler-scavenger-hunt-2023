// react
import { useState } from 'react';

// React Router Dom
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Instructions from './pages/Instructions';
import Lakitu from './pages/Lakitu';
import NoMatch from './pages/NoMatch';
import Question from './pages/Question';

// Context
import { AppContextProvider } from './context/AppContext';

function App() {
  return (
    <AppContextProvider>
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
              hint="Here is a helpful hint."
              next="/question2"
              previousQuestion={null}
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
              hint="Here is a helpful hint."
              next="/question3"
              previousQuestion="Question 1"
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
              hint="Here is a helpful hint."
              next="/question4"
              previousQuestion="Question 2"
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
              hint="Here is a helpful hint."
              next="/question5"
              previousQuestion="Question 3"
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
              hint="Here is a helpful hint."
              next="/question6"
              previousQuestion="Question 4"
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
              hint="Here is a helpful hint."
              next="/question7"
              previousQuestion="Question 5"
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
              hint="Here is a helpful hint."
              next="/question8"
              previousQuestion="Question 6"
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
              hint="Here is a helpful hint."
              next="/question9"
              previousQuestion="Question 7"
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
              hint="Here is a helpful hint."
              next="/question10"
              previousQuestion="Question 8"
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
              hint="Here is a helpful hint."
              next="/question11"
              previousQuestion="Question 9"
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
              hint="Here is a helpful hint."
              next="/question12"
              previousQuestion="Question 10"
            />
          }
        />

        <Route
          path="/question12"
          element={
            <Question
              title="Question 12"
              riddle="The wall of rainbow flowers will lead you through a _____________"
              answer="tunnel"
              hint="Here is a helpful hint."
              next="/finish"
              previousQuestion="Question 11"
            />
          }
        />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AppContextProvider>
  );
}

export default App;
