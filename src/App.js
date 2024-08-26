import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './my-app-frontend/Component/Home/Home';
import Login from './my-app-frontend/Component/Auth/Login';
import Register from './my-app-frontend/Component/Auth/RegisterForm';
import Navbar from './my-app-frontend/Component/Common/Navbar';
import NavBarAvatar from './my-app-frontend/Component/Common/NavBarAvater';
import {Footer} from './my-app-frontend/Component/Common/Footer';
import DashBoard from './my-app-frontend/Component/Auth/DashBoard';  // Import the Dashboard

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
          {/* Home route */}
          <Route path="/" element={<Home />} />

          {/* Login route */}
          <Route
            path="/login"
            element={
              user ? (
                <Navigate to="/dashboard" replace />  // Redirect to Dashboard if already logged in
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />

          {/* Register route */}
          <Route
            path="/register"
            element={
              user ? (
                <Navigate to="/dashboard" replace />  // Redirect to Dashboard if already logged in
              ) : (
                <Register onRegister={handleLogin} />
              )
            }
          />

          {/* Dashboard route */}
          <Route
            path="/dashboard"
            element={
              user ? (
                <DashBoard />  // Show Dashboard if logged in
              ) : (
                <Navigate to="/login" replace />  // Redirect to Login if not logged in
              )
            }
          />

          {/* Additional routes */}
          <Route path="/services" element={<div>Services Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
