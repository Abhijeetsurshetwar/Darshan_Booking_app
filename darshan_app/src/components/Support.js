import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import Navbar from "../components/Navbar"; // Import Navbar
import Footer from "../components/Footer"; // Import Footer
import "../App.css"; // Import CSS for styling

const Support = () => {
  const navigate = useNavigate();  // Initialize the navigate function

  // Function to navigate to the home page
  const handleClose = () => {
    navigate('/home');  // Redirect to home page (or adjust the route accordingly)
  };

  return (
    <div className="support-page">
      {/* Navbar */}
      <Navbar />

      {/* Background with Overlay */}
      <div className="support-background">
        <div className="overlay"></div>
      </div>

      {/* Content Section */}
      <Container className="py-5 text-center">
        <h1 className="fs-2 fw-bold text-white mb-4">📿 Support & Contact 📿</h1>

        {/* Card with Close Button */}
        <Card className="shadow-lg support-card position-relative">
          {/* Close Button */}
          <Button
            variant="link"
            className="position-absolute top-0 end-0 mt-2 me-2 text-white"
            onClick={handleClose}
            style={{ fontSize: '1.5rem', background: 'none', border: 'none' }}
          >
            ✖
          </Button>

          <Card.Body>
            <h5 className="fw-bold text-danger mb-3">For Online Services:</h5>

            <h5 className="fw-bold text-primary mt-4 mb-3">
              📞 Help Line No.: +919518505699 / +919307877060
            </h5>
            <p className="text-dark">
              <strong>Chief Executive Officer</strong>
              <br />
              Darshan Booking Trust, (Know-It)
              <br />
              PO- Agarkar Road, Near Gokhle Institute, Dist. Pune
              <br />
              State: Maharashtra, India
              <br />
              Pincode: 423109
            </p>

            <p className="text-dark">
              📞 <strong>Phone:</strong> (02423) 258500
              <br />
              📱 <strong>Whatsapp:</strong> 07720077203
              <br />
              📧 <strong>Email:</strong> OnlineDarshan@sal.org.in
              <br />
              🐦 <strong>Twitter:</strong> @DarshanBooking
              <br />
              🔗 <strong>URL:</strong>{' '}
              <a href="http://online.sal.org.in" target="_blank" rel="noopener noreferrer">
                online.sal.org.in
              </a>
            </p>
          </Card.Body>
        </Card>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Support;
