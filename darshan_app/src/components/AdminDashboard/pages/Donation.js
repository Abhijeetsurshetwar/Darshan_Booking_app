import React, { useEffect, useState } from 'react';
import { Container, Card, Table } from 'react-bootstrap';
import axios from 'axios';

const Donations = () => {
  const [donations, setDonations] = useState([]); // State to store donation data
  const [loading, setLoading] = useState(true); // State to show loading spinner
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch donation data from the API
    axios
      .get('/api/donations') // Replace with your actual API endpoint
      .then((response) => {
        setDonations(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load donations.');
        setLoading(false);
      });
  }, []);

  return (
    <Container className="py-4">
      <h1 className="fs-2 fw-bold mb-4">Donations</h1>
      <Card className="shadow-sm">
        <Card.Body>
          {loading ? (
            <p>Loading donations...</p>
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Donation ID</th>
                  <th>Donor Name</th>
                  <th>Purpose</th>
                  <th>PID</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((donation) => (
                  <tr key={donation.id}>
                    <td>{donation.id}</td>
                    <td>{donation.donorName}</td>
                    <td>{donation.purpose}</td>
                    <td>{donation.pid}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Donations;
