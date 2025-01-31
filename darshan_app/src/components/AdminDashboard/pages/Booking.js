import React, { useState, useEffect } from 'react';
import { Card, Container, Table, Spinner } from 'react-bootstrap';
import axios from 'axios';

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:8062/admin/all-bookings');
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
    <Container className="py-4 d-flex flex-column align-items-center" style={{
      fontFamily: '"Poppins", sans-serif',
      backgroundColor: '#FAF3E0',
      minHeight: '100vh'
    }}>
      <h1 className="text-center fw-bold mb-4" style={{
        color: '#8B0000',
        fontFamily: '"Times New Roman", serif',
        textShadow: '2px 2px 8px rgba(251, 19, 19, 0.6)'
      }}>
        📖 Devotee Bookings 📖
      </h1>

      <Card className="shadow-lg p-4 w-100" style={{
        border: '3px solid #FFD700',
        backgroundColor: '#FFF5C3',
        boxShadow: '0px 4px 15px rgba(218, 165, 32, 0.5)'
      }}>
        <Card.Body>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" variant="warning" />
              <p className="mt-2">Fetching bookings...</p>
            </div>
          ) : error ? (
            <p className="text-danger text-center">{error}</p>
          ) : (
            <Table striped bordered hover responsive className="text-center" style={{
              backgroundColor: '#FAF0D9',
              borderRadius: '8px'
            }}>
              <thead style={{ backgroundColor: '#FFD700', color: '#8B0000' }}>
                <tr>
                  <th>Booking ID</th>
                  <th>Devotee Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {bookings.length > 0 ? (
                  bookings.map((booking) => (
                    <tr key={booking.bookingId}>
                      <td>{booking.bookingId}</td>
                      <td>{booking.name}</td>
                      <td>{booking.age}</td>
                      <td>{booking.gender}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center text-muted">No bookings available</td>
                  </tr>
                )}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Booking;
