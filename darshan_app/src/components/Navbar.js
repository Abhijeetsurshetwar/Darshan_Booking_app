import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';
//import { useSelector } from 'react-redux';



export default function Navbar() {  
  //const logstatus = useSelector((state)=>state.user.logginstate)


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
              <Link to="/home" className="btn btn-warning text-white fw-medium">Home</Link>
              {/* <Link to="/darshantimes" className="btn btn-warning text-white fw-medium">Darshan Times</Link> */}
              <Link to="/events" className="btn btn-warning text-white fw-medium">Events</Link>
              <Link to="/gallery" className="btn btn-warning text-white fw-medium">Gallery</Link>
              <Link to="/accomodation" className="btn btn-warning text-white fw-medium">Accomodation</Link>
              <Link to="/support" className="btn btn-warning text-white fw-medium">Contact Us</Link>
              <UserMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>  
);
}
