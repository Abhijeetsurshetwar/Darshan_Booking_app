import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div>
            <h3 className="h5 font-weight-bold mb-3">Address :</h3>
            <div className="mb-2">
              <p className="d-flex align-items-center"><MapPin className="me-2" size={20} /> Shri Saibaba Sansthan,</p>

              <p className="d-flex align-items-center"><Phone className="me-2" size={20} /> PO: Shirdi Tal. Rahata Dist. Ahmednagar State- Maharashtra India</p>
              <p className="d-flex align-items-center"><Mail className="me-2" size={20} /> info@temple.com</p>
            </div>
          </div>

          <div>
            <h3 className="h5 font-weight-bold mb-3">Quick Links</h3>
            <ul className="list-unstyled">
              <li><a href="/home" className="text-white text-decoration-none hover-text-warning">Home</a></li>
              {/* <li><a href="/darshanslotes" className="text-white text-decoration-none hover-text-warning">Darshan Times</a></li> */}
              <li><a href="/events" className="text-white text-decoration-none hover-text-warning">Events</a></li>
              <li><a href="/gallery" className="text-white text-decoration-none hover-text-warning">Gallery</a></li>
              <li><a href="/accomodation" className="text-white text-decoration-none hover-text-warning">Accomodation</a></li>

            </ul>
          </div>

          <div>

          <div>
            <h3 className="h5 font-weight-bold mb-3">For Online Services please do contact on</h3>
            <p className="mb-3">02423-258956, 02423-258963,</p>
            <p className="mb-3">Help Line No.</p> 
            <p className="mb-3">+91 7588375204 / 7588371245 /7588373189 / 7588374469</p>
            <div className="d-flex">
            </div>
          </div>
          </div>
        </div>

        <div className="border-top border-warning mt-4 pt-4 text-center">
          <p>&copy; 2025 Sai Darshan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
