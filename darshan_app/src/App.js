import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import HomePage from './components/Pages/HomePage';
import Sidebar from './components/AdminDashboard/componants/Sidebar';
import Dashboard from './components/AdminDashboard/pages/Dashboard';
import Booking from './components/AdminDashboard/pages/Booking';
import Donations from './components/AdminDashboard/pages/Donation';
import Setting from './components/AdminDashboard/pages/Setting';
import Support from './components/AdminDashboard/pages/Support';

function App() {
  return (
   
      <Routes>
        {/* User Routes */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    
  );
}

//  Admin Layout Component 
const AdminLayout = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="content p-4">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="booking" element={<Booking />} />
          <Route path="donations" element={<Donations />} />
          <Route path="setting" element={<Setting />} />
          <Route path="support" element={<Support />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
