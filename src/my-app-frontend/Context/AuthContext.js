import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { loginUser, registerUser, verifyToken } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const userData = await verifyToken(token);
        if (userData) {
          setUser(userData);
        }
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const login = async (email, password) => {
    const response = await loginUser(email, password);
    if (response.token) {
      localStorage.setItem('token', response.token);
      setUser(response.user);
      history.push('/dashboard');
    }
  };

  const register = async (name, email, password) => {
    const response = await registerUser(name, email, password);
    if (response.message === 'User registered successfully') {
      history.push('/login');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    history.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
