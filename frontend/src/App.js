import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import AdminDashboard from './components/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';
import LandingPage from './components/LandingPage'; // Import LandingPage

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Add LandingPage route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
        </Route>

        {/* Remove wildcard route to avoid redirect loop */} 
      </Routes>
    </BrowserRouter>
  );
}

export default App;