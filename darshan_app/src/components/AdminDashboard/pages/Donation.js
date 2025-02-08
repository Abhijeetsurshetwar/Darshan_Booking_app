import React, { useEffect, useState } from 'react';
import { Container, Card, Table, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from "react-redux"; 

const Donations = () => {
  const [donations, setDonations] = useState([]); // State to store donation data
  const [loading, setLoading] = useState(true); // State to show loading spinner
  const [error, setError] = useState(null); // State to handle errors

  const userInfo = useSelector((state) => state.user.userinfo);
  const Token = userInfo?.token; 

  useEffect(() => {
    // Fetch donation data from the API
    axios
      .get('http://localhost:8062/donation/alldonation', {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Token}`
        },
      }) // Replace with your actual API endpoint
      .then((response) => {
        setDonations(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load donations.');
        setLoading(false);
      });
  }, [Token]);

  // Calculate total donation amount
  const totalDonation = donations.reduce((total, donation) => total + donation.ammount, 0);

  return (
    <Container fluid className="py-4" style={{
      backgroundColor: '#FAF3E0', // Holistic background color
      minHeight: '100vh',
      minWidth:'170vh',
      fontFamily: '"Poppins", sans-serif',
    }}>
      <h1 className="fs-2 fw-bold mb-4 text-center" style={{
        color: '#8B0000',
        textShadow: '2px 2px 8px rgba(251, 19, 19, 0.6)'
      }}>
        Donations
      </h1>
      <Card className="shadow-lg mx-auto" style={{
        maxWidth: '1200px', // Set a max width for the card
        backgroundColor: '#FFF5C3',
        border: '3px solid #FFD700',
        boxShadow: '0px 4px 15px rgba(218, 165, 32, 0.5)',
      }}>
        <Card.Body>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" variant="warning" />
              <p className="mt-2">Loading donations...</p>
            </div>
          ) : error ? (
            <p className="text-danger text-center">{error}</p>
          ) : (
            <Table striped bordered hover responsive className="text-center" style={{
              backgroundColor: '#FFF8E1', // Softer background color for the table
              borderRadius: '8px',
              border: '2px solid #FFD700', // Border to match the card
            }}>
              <thead style={{ backgroundColor: '#FFD700', color: '#8B0000' }}>
                <tr>
                  <th>Donation ID</th>
                  <th>Donor Name</th>
                  <th>Purpose</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {donations.length > 0 ? (
                  donations.map((donation) => (
                    <tr key={donation.id} style={{
                      backgroundColor: '#FAF0D9', // Light background for rows
                    }}>
                      <td>{donation.id}</td>
                      <td>{donation.user_name}</td>
                      <td>{donation.purpose}</td>
                      <td>{donation.ammount}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center text-muted">No donations available</td>
                  </tr>
                )}
                {/* Total Donation Row */}
                {donations.length > 0 && (
                  <tr style={{ fontWeight: 'bold', backgroundColor: '#FFD700' }}>
                    <td colSpan="3" className="text-center">Total Donation</td>
                    <td>{totalDonation}</td>
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

export default Donations;