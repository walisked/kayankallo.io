import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email address is invalid';
    if (!phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:5000/register', {
          name,
          email,
          phoneNumber,
        });

        const userData = response.data.user;
        onRegister(userData);

        setName('');
        setEmail('');
        setPhoneNumber('');
        setApiError(null);
      } catch (error) {
        setApiError('Failed to register. Please try again.');
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
              <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="name">Name</label>
                  <input
                    className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && <p className="text-xs italic text-red-500">{errors.name}</p>}
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="email">Email</label>
                  <input
                    className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                    id="email"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <p className="text-xs italic text-red-500">{errors.email}</p>}
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="phoneNumber">Phone Number</label>
                  <input
                    className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${errors.phoneNumber ? 'border-red-500' : ''}`}
                    id="phoneNumber"
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  {errors.phoneNumber && <p className="text-xs italic text-red-500">{errors.phoneNumber}</p>}
                </div>
                {apiError && <p className="text-xs italic text-red-500">{apiError}</p>}
                <div className="mb-6 text-center">
                  <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">Register</button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="/">Already have an account? Login!</a>
                </div>
                <div className="text-center">
                  <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="/">Forgot Password?</a>
                </div>
              </form>
              <p className="text-center text-gray-500 text-xs">&copy;2023 SMS. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
