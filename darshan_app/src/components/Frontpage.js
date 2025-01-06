import React from 'react';
import { Calendar } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

export default function Frontpage() {
  return (
    <div className="position-relative" style={{ height: '600px' }}>
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black" style={{ opacity: 0.5 }}></div>
      </div>
      
      <div className="position-relative text-center text-white px-4" style={{ zIndex: 10 }}>
        <h1 className="display-4 mb-4">श्री मंदिर</h1>
        <p className="lead mb-4">Experience Divine Peace and Spiritual Enlightenment</p>
        <button className="btn btn-warning btn-lg d-flex align-items-center justify-content-center mx-auto">
          <Calendar className="me-2" />
          Book Darshan
        </button>
      </div>
    </div>
  );
}