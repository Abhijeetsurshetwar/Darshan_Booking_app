import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import UserMenu from './components/Navbar'; // Import Navbar
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import HomePage from './components/Pages/HomePage';
import BookDarshan from './components/Bookdarshan';
import BookPooja from './components/Bookpooja';
import Sidebar from './components/AdminDashboard/componants/Sidebar';
import Dashboard from './components/AdminDashboard/pages/Dashboard';
import Booking from './components/AdminDashboard/pages/Booking';
import Donations from './components/AdminDashboard/pages/Donation';
import Setting from './components/AdminDashboard/pages/Setting';
import Support from './components/Support';
import Donation from './components/Donation';
import Events from './components/Events';
import Accommodation from './components/Accomodation';
import MyBookings from './components/MyBooking';
import Mainpage from './components/Mainpage';

function App() {
  return (
    
      <Routes>
        {/* User Routes */}
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/home" element={<HomePage />} />

        {/* Routes where Navbar should appear */}
        <Route path="/book-darshan" element={<BookDarshan />} />
        <Route path="/book-pooja" element={<BookPooja />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/events" element={<Events />} />
        <Route path="/support" element={<Support />} />
        <Route path="/accomodation" element={<Accommodation />} />
        <Route path="/mybookings" element={<MyBookings />} />
        


        {/* Redirect to login by default */}
        <Route path="/" element={<Navigate to="/mainpage" />} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    
  );
}



// Admin Layout Component
const AdminLayout = () => {
  return (
    <div style={{ marginLeft: '270px', padding: '20px', minHeight: '100vh' }}>
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
    </div>
  );
};

export default App;
