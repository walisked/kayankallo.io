import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (credentials) => {
    // Simulate API call
    const fakeUser = { name: 'John Doe', email: credentials.email };
    setUser(fakeUser);
  };

  const handleRegister = (data) => {
    // Simulate API call
    const newUser = { name: data.name, email: data.email };
    setUser(newUser);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login">
            {user ? <Redirect to="/dashboard" /> : <Login onLogin={handleLogin} />}
          </Route>
          <Route path="/register">
            {user ? <Redirect to="/dashboard" /> : <Register onRegister={handleRegister} />}
          </Route>
          <Route path="/dashboard">
            {user ? <Dashboard user={user} /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
