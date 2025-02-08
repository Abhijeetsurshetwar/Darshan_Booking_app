import { useState, useEffect } from 'react';
import { UserCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from './Redux/Slice';

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const userinfo = useSelector((state) => state.user.userinfo);
  const login = useSelector((state) => state.user.logginstate);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.position-relative')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div className="position-relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="d-flex align-items-center text-white bg-transparent border-0 p-2 rounded-circle"
        style={{ backgroundColor: isOpen ? '#ff5722' : 'transparent' }} // Hover effect
      >
        <UserCircle size={24} />
      </button>

      {isOpen && (
        <div
          className={`dropdown-menu ${isOpen ? 'show' : ''} position-absolute end-0 mt-2 shadow-sm`}
          style={{ zIndex: 1050 }}
        >
          <button
            onClick={() => {
              navigate('/mybookings');
              setIsOpen(false);
            }}
            className="dropdown-item text-start text-dark"
          >
            My Bookings
          </button>
          <button
            onClick={() => {
              navigate('/updateprofile');
              setIsOpen(false);
            }}
            className="dropdown-item text-start text-dark"
          >
            Update Profile
          </button>
          <button
            onClick={() => {
              navigate('/login');
              dispatch(Logout());
            }}
            className="dropdown-item text-start text-dark"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
