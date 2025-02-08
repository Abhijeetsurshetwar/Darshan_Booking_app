
import React from 'react';
import { Clock, Calendar, Info, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Custom styles for animations and layout

const MainPage = () => {
  return (
    <div className="main-container">
      {/* Header with Login Button */}
      <header className="text-center py-5 bg-warning bg-opacity-75 shadow-lg animate__animated animate__fadeInDown">
        <div className="container position-relative">
          <div className="position-absolute top-0 end-0 p-3">
            <Link to="/login"> {/* Use Link for navigation */}
              <button className="btn btn-danger d-flex align-items-center shadow" id="login-btn">
                <LogIn size={20} className="me-2" />
                Login
              </button>
            </Link>
          </div>
          <h1 className="display-4 fw-bold text-dark">श्री साईंबाबा संस्थान</h1>
          <h2 className="h4 text-dark">Shree Saibaba Sansthan Trust</h2>
        </div>
      </header>

      {/* Notice Banner */}
      <div className="bg-danger text-white py-3 shadow animate__animated animate__slideInDown">
        <div className="container text-center d-flex align-items-center justify-content-center">
          <Info size={26} className="me-2" />
          <p className="mb-0">Please login to make Darshan Bookings or Donations</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container my-5">
        {/* Temple Overview Section */}
        <section className="row mb-5 align-items-center animate__animated animate__fadeInLeft">
          <div className="col-md-6">
            <h3 className="h3 fw-semibold text-warning">About The Temple</h3>
            <p className="text-light">
              Shirdi Sai Baba Temple is one of India's most revered spiritual destinations, located in
              Shirdi, Maharashtra. The temple is dedicated to Sai Baba, a spiritual master who preached
              the unity of all religions.
            </p>
            <p className="text-light">
              The Samadhi Mandir, where Sai Baba's mortal remains are interred, attracts millions of
              devotees annually, seeking blessings and spiritual solace.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://5.imimg.com/data5/EF/HQ/GLADMIN-10293336/nashik-and-shirdi-tours-500x500.png"
              alt="Shirdi Sai Temple"
              className="img-fluid rounded shadow-lg temple-img"
            />
          </div>
        </section>

        {/* Sai Baba Section */}
        <section className="row mb-5 align-items-center bg-light rounded p-4 shadow-lg animate__animated animate__fadeInRight">
          <div className="col-md-6 text-center">
            <img
              src="https://saibabaimages.com/wp-content/uploads/elementor/thumbs/06c20cc8-a0b9-4239-8227-391fc3bd258e-qy8m8vdcvli9xnikomnz7aeih4zbt8jd3oqdplhdfw.jpg"
              alt="Sai Baba"
              className="img-fluid rounded shadow-lg sai-img"
            />
          </div>
          <div className="col-md-6">
            <h3 className="h3 fw-semibold text-warning">History of Sai Baba</h3>
            <p className="text-dark">
              Sai Baba of Shirdi is regarded as a saint, fakir, and satguru. He lived in Shirdi in the late
              19th and early 20th centuries, emphasizing moral values, love, forgiveness, charity, and devotion to God.
            </p>
            <p className="text-dark">
              His philosophy of "Sabka Malik Ek" (One God for All) attracted followers from all religions.
              Millions visit Shirdi every year to seek his blessings.
            </p>
          </div>
        </section>

        {/* Daily Programs */}
        <section className="bg-light rounded p-4 shadow-lg animate__animated animate__zoomIn">
          <h3 className="h3 fw-semibold text-warning d-flex align-items-center">
            <Calendar className="me-2" /> Daily Programs
          </h3>
          <div className="row">
            {[
              { time: "4:30 AM - Kakad Aarti", title: "Morning Aarti" },
              { time: "12:00 PM - Madhyan Aarti", title: "Afternoon Aarti" },
              { time: "7:00 PM - Dhup Aarti", title: "Evening Aarti" },
            ].map((item, index) => (
              <div key={index} className="col-md-4 mb-3 animate__animated animate__fadeInUp">
                <div className="bg-warning p-3 rounded hover-zoom">
                  <h4 className="h5 fw-semibold text-dark d-flex align-items-center">
                    <Clock className="me-2" /> {item.title}
                  </h4>
                  <p className="text-dark">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-warning text-center py-3 shadow-lg animate__animated animate__fadeInUp">
        <p className="text-dark mb-0">
          © 2024 Shree Saibaba Sansthan, All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default MainPage;
