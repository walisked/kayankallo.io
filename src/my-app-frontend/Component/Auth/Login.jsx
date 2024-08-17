import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email address is invalid";
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:5000/login', { email, password });
        const { user, token } = response.data;
        onLogin(user, token);

        if (password === 'WA0963@Lisked') {
          navigate('/admin-dashboard');
        } else {
          navigate('/src/my-app-frontend/Component/Dashboard/DashBoard.js');
        }
      } catch (error) {
        setErrors({ form: 'Failed to login. Please try again.' });
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="h-full dark:bg-gray-900">
      <div className="mx-auto">
        <div className="flex justify-center px-100 py-40">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
              <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Welcome Back!</h3>
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
                </div>
                {errors.form && <p className="text-red-500 text-xs italic">{errors.form}</p>}
                <div className="flex items-center justify-between">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Login</button>
                  <button type="button" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" onClick={() => alert('Forgot Password functionality')}>Forgot Password?</button>
                </div>
              </form>
              <p className="text-center text-gray-500 text-xs">&copy; 2023 SMS. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
