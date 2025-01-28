import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div>
            <h3 className="h5 font-weight-bold mb-3">Contact Us</h3>
            <div className="mb-2">
              <p className="d-flex align-items-center"><MapPin className="me-2" size={20} /> 123 Temple Street, City</p>
              <p className="d-flex align-items-center"><Phone className="me-2" size={20} /> +91 95185 05699</p>
              <p className="d-flex align-items-center"><Mail className="me-2" size={20} /> info@temple.com</p>
            </div>
          </div>

          <div>
            <h3 className="h5 font-weight-bold mb-3">Quick Links</h3>
            <ul className="list-unstyled">
              <li><a href="/home" className="text-white text-decoration-none hover-text-warning">Home</a></li>
              <li><a href="#darshan" className="text-white text-decoration-none hover-text-warning">Darshan Times</a></li>
              <li><a href="#events" className="text-white text-decoration-none hover-text-warning">Events</a></li>
              <li><a href="#gallery" className="text-white text-decoration-none hover-text-warning">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h3 className="h5 font-weight-bold mb-3">Newsletter</h3>
            <p className="mb-3">Subscribe to receive updates about events and festivals.</p>
            <div className="d-flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control rounded-0"
              />
              <button className="btn btn-warning rounded-0 ms-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-top border-warning mt-4 pt-4 text-center">
          <p>&copy; 2024 Sai Darshan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
