import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MyBookings = () => {
  const [darshanBookings, setDarshanBookings] = useState([]);
  const [poojaBookings, setPoojaBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const userinfo = useSelector((state) => state.user.userinfo);
  const token = userinfo?.token;
  const username = userinfo?.uname;

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8062/getbooking?username=${username}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log("📌 Bookings Data:", response.data);

        // Separate Darshan and Pooja bookings
        const darshan = response.data.filter((booking) => booking.devoteeNames);
        const pooja = response.data.filter((booking) => !booking.devoteeNames);

        setDarshanBookings(darshan);
        setPoojaBookings(pooja);
      } catch (error) {
        console.error("❌ Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [username, token]);

  return (
    <>
      <Navbar />
      <div className="bookings-container">
        <h1 className="bookings-title">📜 My Bookings</h1>

        {loading ? (
          <p className="loading-text">⏳ Loading your bookings...</p>
        ) : (
          <>
            {/* Darshan Bookings Table */}
            <h2 className="section-title">🛕 Darshan Bookings 🛕</h2>
            {darshanBookings.length > 0 ? (
              <table className="booking-table">
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
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{booking.date}</td>
                      <td>{booking.slot}</td>
                      <td>{booking.totalDevotee}</td>
                      <td>
                        {booking.devoteeNames.map((devotee, idx) => (
                          <p key={idx}>
                            {devotee.devoteeName}, {devotee.age}, {devotee.gender}, {devotee.aadharNumber}
                          </p>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="no-booking">❌ No Darshan bookings found.</p>
            )}

            {/* Pooja Bookings Table */}
            <h2 className="section-title">🕉️ Pooja Bookings</h2>
            {poojaBookings.length > 0 ? (
              <table className="booking-table">
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
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{booking.date}</td>
                      <td>{booking.slot}</td>
                      <td>{booking.totalDevotee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="no-booking">❌ No Pooja bookings found.</p>
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MyBookings;
