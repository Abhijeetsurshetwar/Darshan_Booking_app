import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';
import { useSelector } from 'react-redux';

export default function Navbar() {  
  const logstatus = useSelector((state)=>state.user.logginstate)


  return (
    <div>

    <nav className="bg-warning text-white navbar-full-width">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between py-2">
          <div>
            <Link to="/" className="navbar-brand text-white fw-bold fs-4">दर्शन</Link>
          </div>

          {/* Desktop Menu */}
          <div className="d-none d-md-flex">
            <div className="d-flex align-items-center gap-3">
              <Link to="/" className="btn btn-warning text-white fw-medium">Home</Link>
              <a href="#darshan" className="btn btn-warning text-white fw-medium">Darshan Times</a>
              <a href="#events" className="btn btn-warning text-white fw-medium">Events</a>
              <a href="#gallery" className="btn btn-warning text-white fw-medium">Gallery</a>
              <a href="#contact" className="btn btn-warning text-white fw-medium">Contact</a>
              <UserMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>  
);
}
