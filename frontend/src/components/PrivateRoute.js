import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem('token'); // Check if a token exists

  return isAuthenticated ? (
    <Outlet /> // If authenticated, render the child routes
  ) : (
    <Navigate to="/" state={{ from: location }} replace /> // If not authenticated, redirect to the login page
  );
};

// Export the PrivateRoute component as the default export
export default PrivateRoute;