// React Router Dom
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
