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
        element={<Question title="Question 1" riddle="Here is a difficult question" answer="yes" next="/question2" />}
      />

      <Route
        path="/question2"
        element={
          <Question title="Question 2" riddle="Here is another difficult question" answer="yes" next="/question3" />
        }
      />

      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
