import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import LandingPage from './my-app-frontend/Component/LandingPage';
// import Home from './my-app-frontend/Component/Home';
import Login from './my-app-frontend/Component/Auth/Login';
import Register from './my-app-frontend/Component/Auth/RegisterForm';
import Navbar from './my-app-frontend/Component/Common/Navbar';
import NavBarAvatar from './my-app-frontend/Component/Common/NavBarAvater';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        {user ? <NavBarAvatar onLogout={handleLogout} /> : <Navbar />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<div>Services Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route
            path="/login"
            element={
              user ? (
                <Navigate to="/" />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/register"
            element={
              user ? (
                <Navigate to="/" />
              ) : (
                <Register onRegister={handleLogin} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
