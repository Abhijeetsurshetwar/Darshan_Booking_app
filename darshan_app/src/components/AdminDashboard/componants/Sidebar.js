import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const Sidebar = () => {
  return (
    <div className="bg-light border-end vh-100 p-3" style={{ width: '250px' }}>
      <h5 className="text-center">MyApp</h5>
      <ul className="list-unstyled">
        <li>
          <Link className="text-decoration-none d-block py-2" to="/admin/dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="text-decoration-none d-block py-2" to="/admin/booking">
            Booking
          </Link>
        </li>
        <li>
          <Link className="text-decoration-none d-block py-2" to="/admin/donations">
            Donations
          </Link>
        </li>
        <li>
          <Link className="text-decoration-none d-block py-2" to="/admin/setting">
            Settings
          </Link>
        </li>
        <li>
          <Link className="text-decoration-none d-block py-2" to="/admin/support">
            Support
          </Link>
        </li>
       
      </ul>
    </div>
  );
};

export default Sidebar;
