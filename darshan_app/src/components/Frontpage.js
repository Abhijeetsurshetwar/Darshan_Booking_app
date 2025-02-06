import React from 'react';
import { Calendar, Heart, HandCoins } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

export default function Frontpage() {
  const navigate = useNavigate();

  return (
    <div className="position-relative d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      {/* Background Image with Overlay */}
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
      
      {/* Content Centered */}
      <div className="position-relative text-center text-white px-4" style={{ zIndex: 10 }}>
        <h1 className="display-4 mb-4">श्री मंदिर</h1>
        <p className="lead mb-4">Experience Divine Peace and Spiritual Enlightenment</p>

        {/* Buttons Stacked Vertically */}
        <div className="d-flex flex-column align-items-center gap-3">
          <button 
            className="btn btn-warning btn-lg d-flex align-items-center justify-content-center w-50"
            onClick={() => navigate('/book-darshan')}
          >
            <Calendar className="me-2" />
            Book Darshan
          </button>

          <button 
            className="btn btn-danger btn-lg d-flex align-items-center justify-content-center w-50"
            onClick={() => navigate('/book-pooja')}
          >
            <Heart className="me-2" />
            Book Pooja
          </button>

          <button 
            className="btn btn-success btn-lg d-flex align-items-center justify-content-center w-50"
            onClick={() => navigate('/donation')}
          >
            <HandCoins className="me-2" />
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}
