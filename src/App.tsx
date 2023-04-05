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
import PictureTime from './pages/PictureTime';

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
              hint="What is the meaning of life, the universe, and everything?"
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
              hint="Seek out the wisdom of P.F. Chang."
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
              hint="It would rival the Delfino 'PLAZA'."
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
              hint="Could be bordering sherbet land."
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
              hint="This is Rosalina's favorite place to see a movie."
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
              hint="The habitat sits outside Kilwins and changes color at night. Read any information around it's border."
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
              riddle="Which building has painted walls of blue and a cowboy riding into the sunset?"
              answer="the homestead"
              hint="You can find it next to the amphitheater stage."
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
              hint="They came from Scheels."
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
              hint="Easily found once you have 'escaped'."
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
              hint="Looks like it was taken from Rainbow Road."
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
              hint="It's bigger on the inside."
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
              hint="Once inside, you can pretend you are driving on Rainbow Road"
              next="/picture-time"
              previousQuestion="Question 11"
            />
          }
        />

        <Route path="/picture-time" element={<PictureTime />} />

        <Route
          path="/question13"
          element={
            <Question
              title="Question 13"
              riddle="What phrase states a heart felt message before entering through seven entryways?"
              answer="wish you were here"
              hint="They have cocktails in their kitchen"
              next="/question14"
              previousQuestion="Question 12"
            />
          }
        />

        <Route
          path="/question14"
          element={
            <Question
              title="Question 14"
              riddle="Last clue! Time to race to the finish line ...literally. Bowser has taken Peach away to Barney Smith's castle, and Mario and Luigi need your help to save her from being flushed down the toilet! It's time to leave Grandscape, but where did they go?!"
              answer="truck yard"
              hint="Time to enjoy drinks with friends surrounded by trucks and cars all around!"
              next="/finish"
              previousQuestion="Question 13"
            />
          }
        />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AppContextProvider>
  );
}

export default App;
