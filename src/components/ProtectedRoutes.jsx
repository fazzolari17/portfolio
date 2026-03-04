import React from 'react';
import {
  // Navigate,
  Outlet
} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Unauthorized from './Unauthorized';

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();

  // If not logged in, redirect to login page
  // if (!isLoggedIn) {
  //   return <Navigate to='/login' replace />;
  // }
  if (!isLoggedIn) {
    return <Unauthorized/>;
  }

  // If logged in, render the matching child route
  return <Outlet />;
};

export default ProtectedRoute;
