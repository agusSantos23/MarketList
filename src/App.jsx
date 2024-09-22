import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import Auth from './Pages/Auth.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/terms-and-conditions' element={""} />

      </Routes>
    </Router>
  );
}

export default App;
