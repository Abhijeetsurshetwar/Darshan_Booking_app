import React, { useState, useEffect } from 'react';
import { Card, Container, Table, Spinner } from 'react-bootstrap';
import axios from 'axios'; // Assuming you are using axios for API requests

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch booking data from your database
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:8080/admin/all-bookings'); // Replace with your API endpoint
        setBookings(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching bookings:', err);
        setError('Failed to load bookings. Please try again later.');
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <Container className="py-4">
      <h1 className="fs-2 fw-bold mb-4">Bookings</h1>
      <Card className="shadow-sm">
        <Card.Body>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" role="status" />
              <p>Loading bookings...</p>
            </div>
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : bookings.length > 0 ? (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.bookingId}>
                    <td>{booking.bookingId}</td>
                    <td>{booking.name}</td>
                    <td>{booking.age}</td>
                    <td>{booking.gender}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No bookings available.</p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Booking;

