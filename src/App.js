import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/Login';
import Register from './Component/RegisterForm';
import Dashboard from './Component/DashBoard';
import  Navbar  from './Component/Navbar'; // Your default NavBar component
import NavBarAvatar from './Component/NavBarAvater'; // Your NavBarAvatar component

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
          <Route path="/" element={<Home user={user} />} />
          <Route path="/services" element={<div>Services Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route
            path="/login"
            element={
              user ? (
                <Navigate to="/dashboard" />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/register"
            element={
              user ? (
                <Navigate to="/dashboard" />
              ) : (
                <Register onRegister={handleLogin} />
              )
            }
          />
          <Route
            path="/dashboard"
            element={user ? <Dashboard user={user} /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
