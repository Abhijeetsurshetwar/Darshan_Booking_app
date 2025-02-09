import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 
import "../App.css"; 

const Support = () => {
  return (
    <div className="support-page">
 
      <Navbar />

      <div className="support-background">
        <div className="overlay"></div>
      </div>

      {/* Content Section */}
      <Container className="py-5 text-center">
        <h1 className="fs-2 fw-bold text-white mb-4">📿 Support & Contact 📿</h1>

        <Card className="shadow-lg support-card">
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

      <Footer />
    </div>
  );
};

export default Support;