import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Logout } from '../../Redux/Slice';

const Sidebar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing tokens)
    // Redirect to the login page
      
    dispatch(Logout());    
    navigate('/mainpage');
  };

  return (
    <div
      className="vh-100 p-4 bg-warning text-white"
      style={{
        width: '270px',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        overflowY: 'auto',
      }}
    >
      <h4 className="text-center fw-bold mb-4">🛕 Temple Admin </h4>
      <ul className="list-unstyled">
        {[
          { path: '/admin/dashboard', label: '📊 Dashboard' },
          { path: '/admin/booking', label: '📖 Booking' },
          { path: '/admin/donations', label: '💰 Donations' },
          { path: '/admin/setting', label: '🏠 Accommodation' },
          
        ].map((item, index) => (
          <li key={index} className="mb-2">
            <Link
              to={item.path}
              className="d-block py-2 px-3 text-white text-decoration-underline fs-5 bg-danger bg-opacity-10 rounded"
              style={{
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(220, 53, 69, 0.5)';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(220, 53, 69, 0.1)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
