import API from './api';

export const registerUser = async (name, email, password) => {
  try {
    const { data } = await API.post('/users/register', { name, email, password });
    return data;
  } catch (error) {
    console.error(error);
    return { message: 'Registration failed' };
  }
};

export const loginUser = async (email, password) => {
  try {
    const { data } = await API.post('/users/login', { email, password });
    return data;
  } catch (error) {
    console.error(error);
    return { message: 'Login failed' };
  }
};

export const verifyToken = async (token) => {
  try {
    const { data } = await API.post('/users/verifyToken', { token });
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
