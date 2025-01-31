import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Support = () => {
  return (
    <Container className="py-4">
      <h1 className="fs-2 fw-bold mb-4">Support</h1>
      <Card className="shadow-sm">
        <Card.Body>
          <h5 className="fw-bold mb-3">For Online Services:</h5>

          <h5 className="fw-bold mt-4 mb-3">Help Line No.: +919518505699 / +919307877060</h5>
          <p>
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

          <p>
            Phone: <strong>(02423) 258500</strong>
            <br />
            Whatsapp: <strong>07720077203</strong>
            <br />
            Email: <strong>OnlineDarshan@sal.org.in</strong>
            <br />
            Twitter: <strong>@DarshanBooking</strong>
            <br />
            URL: <a href="http://online.sal.org.in" target="_blank" rel="noopener noreferrer">online.sal.org.in</a>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Support;
