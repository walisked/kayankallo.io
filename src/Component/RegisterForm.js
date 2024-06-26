import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = ({ onRegister }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [bvn, setBvn] = useState('');
  const [dob, setDob] = useState('');
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = 'First Name is required';
    if (!lastName) newErrors.lastName = 'Last Name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email address is invalid';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!bvn) newErrors.bvn = 'BVN is required';
    if (!dob) newErrors.dob = 'Date of Birth is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      try {
        // Create wallet for the user
        const walletResponse = await axios.post(
          '{{base_url}}/api/v1/disbursements/wallet',
          {
            walletReference: `ref${Date.now()}`,
            walletName: `Wallet - ${Date.now()}`,
            customerName: `${firstName} ${lastName}`,
            bvnDetails: {
              bvn: bvn,
              bvnDateOfBirth: dob
            },
            customerEmail: email
          },
          {
            headers: {
              Authorization: 'Basic ' + btoa('apiKey:SecretKey') // Replace with your actual API key and secret
            }
          }
        );

        const userData = walletResponse.data.responseBody;
        onRegister(userData);

        // Clear form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setBvn('');
        setDob('');
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
              <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
                Create an Account!
              </h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded" onSubmit={handleSubmit}>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${errors.firstName ? 'border-red-500' : ''}`}
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    {errors.firstName && <p className="text-xs italic text-red-500">{errors.firstName}</p>}
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${errors.lastName ? 'border-red-500' : ''}`}
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    {errors.lastName && <p className="text-xs italic text-red-500">{errors.lastName}</p>}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="email">
                    Email
                  </label>
                  <input
                    className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <p className="text-xs italic text-red-500">{errors.email}</p>}
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="password">
                      Password
                    </label>
                    <input
                      className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
                      id="password"
                      type="password"
                      placeholder="******"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p className="text-xs italic text-red-500">{errors.password}</p>}
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                    <input
                      className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${errors.confirmPassword ? 'border-red-500' : ''}`}
                      id="confirmPassword"
                      type="password"
                      placeholder="******"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {errors.confirmPassword && <p className="text-xs italic text-red-500">{errors.confirmPassword}</p>}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="bvn">
                    BVN
                  </label>
                  <input
                    className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${errors.bvn ? 'border-red-500' : ''}`}
                    id="bvn"
                    type="text"
                    placeholder="BVN"
                    value={bvn}
                    onChange={(e) => setBvn(e.target.value)}
                  />
                  {errors.bvn && <p className="text-xs italic text-red-500">{errors.bvn}</p>}
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="dob">
                    Date of Birth
                  </label>
                  <input
                    className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${errors.dob ? 'border-red-500' : ''}`}
                    id="dob"
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                  {errors.dob && <p className="text-xs italic text-red-500">{errors.dob}</p>}
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Register Account
                  </button>
                </div>
                {apiError && <p className="text-xs italic text-red-500">{apiError}</p>}
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                    href="./login"
                  >
                    Already have an account? Login!
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
