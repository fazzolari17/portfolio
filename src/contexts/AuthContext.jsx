// AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import config from '../config';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (data) => {

    const url = `${config.BACKEND_API_URI}/login`;
    const loginData = {
      email: data.email,
      password: data.password
    };

    try {
      const response = await axios.post(url, loginData, { withCredentials: true });

      console.log(response.status, response);

      if (response.status === 200 && response.data.success) {
        setIsLoggedIn(true);
      }

      return response;
    } catch (error) {
      console.error(error);

      if (error.response.status === 401) {
        return { status: error.response.status, data: { success: false, message: error.response.data.message } };
      }
      return error;
    }

  };

  const logout = async () => {

    try {
      const response =  await axios.post(
        `${config.BACKEND_API_URI}/logout`, {}, {
          withCredentials: true
        });

      console.log(response);

      if (response.data.success) {
        setIsLoggedIn(false);
      }
      return response;

    } catch (error) {
      console.error(error);
      return error;
    }

  };

  const verifyAuth = async () => {

    try {
      const response = await axios.get(`${config.BACKEND_API_URI}/me`, { withCredentials: true });
      if (response.data.authenticated || response.data.success) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log('ERROR', error);
      setIsLoggedIn(false);
    }

  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, login, logout, verifyAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook for easy access
export const useAuth = () => useContext(AuthContext);
