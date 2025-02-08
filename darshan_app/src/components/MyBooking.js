import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table, Container, Spinner, Alert } from "react-bootstrap";
import "../App.css"; // Add custom styles
import Navbar from "./Navbar"; // Import existing Navbar
import Footer from "./Footer"; // Import existing Footer

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get username & token from Redux
  const username = useSelector((state) => state.userinfo.uname);
  const token = useSelector((state) => state.userinfo.token);

  useEffect(() => {
    if (!username) {
      setError("User not logged in. Please log in to view your bookings.");
      setLoading(false);
      return;
    }

    const fetchBookings = async () => {
        try {
        const response = await fetch(`http://localhost:8062/getbooking?username=${username}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) throw new Error("Failed to fetch bookings.");

        const data = await response.json();
        setBookings(data);
        console.log("Bookings fetched successfully:", data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching bookings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [username, token]);

  // Filter Darshan and Pooja bookings
  const darshanBookings = bookings.filter((b) => b.devoteeNames && b.devoteeNames.length > 0);
  const poojaBookings = bookings.filter((b) => !b.devoteeNames || b.devoteeNames.length === 0);

  return (
    <>
      <Navbar />
      <div className="mybookings-container">
        <Container>
          <h2 className="page-title animate__animated animate__fadeInDown">
            ✨ My Bookings ✨
          </h2>
          {loading && <Spinner animation="border" variant="primary" className="loading-spinner" />}
          {error && <Alert variant="danger">{error}</Alert>}

          {/* Darshan Bookings Table */}
          {darshanBookings.length > 0 && (
            <div className="booking-section animate__animated animate__fadeInLeft">
              <h3 className="section-title">📿 Darshan Bookings</h3>
              <Table striped bordered hover className="table-shadow">
                <thead>
                  <tr>
                    <th>Sr. No</th>
                    <th>Booking Date</th>
                    <th>Slot</th>
                    <th>No. of Persons</th>
                    <th>Devotee Details</th>
                  </tr>
                </thead>
                <tbody>
                  {darshanBookings.map((booking, index) => (
                    <tr key={booking.bookingId}>
                      <td>{index + 1}</td>
                      <td>{booking.date}</td>
                      <td>{booking.slot}</td>
                      <td>{booking.totalDevotee}</td>
                      <td>
                        {booking.devoteeNames.map((devotee, i) => (
                          <div key={devotee.id} className="devotee-details">
                            <strong>{i + 1}. {devotee.devoteeName}</strong> (Age: {devotee.age}, Gender: {devotee.gender})
                            <br />
                            <span>Aadhar: {devotee.aadharNumber}</span>
                          </div>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}

          {/* Pooja Bookings Table */}
          {poojaBookings.length > 0 && (
            <div className="booking-section animate__animated animate__fadeInRight">
              <h3 className="section-title">🛕 Pooja Bookings</h3>
              <Table striped bordered hover className="table-shadow">
                <thead>
                  <tr>
                    <th>Sr. No</th>
                    <th>Booking Date</th>
                    <th>Slot</th>
                    <th>No. of Persons</th>
                  </tr>
                </thead>
                <tbody>
                  {poojaBookings.map((booking, index) => (
                    <tr key={booking.bookingId}>
                      <td>{index + 1}</td>
                      <td>{booking.date}</td>
                      <td>{booking.slot}</td>
                      <td>{booking.totalDevotee}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default MyBookings;
