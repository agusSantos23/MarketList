import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';

import Home from "./Pages/Home.jsx";
import Auth from './Pages/Auth.jsx';
import PrivateRoute from './Pages/PrivateRoute.jsx';
import Lobby from './Pages/Lobby.jsx';


function App() {


  return (
    <Router>
      <AuthProvider>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/terms-and-conditions' element={""} />

          <Route element={<PrivateRoute/>}>
            <Route path='/lobby' element={<Lobby />} />

          </Route>
        </Routes>
      </AuthProvider>
    </Router>

    
  );
}

export default App;
