import React, { useEffect, useState } from 'react';
import { Container, Card, Table } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from "react-redux"; 

const Donations = () => {
  const [donations, setDonations] = useState([]); // State to store donation data
  const [loading, setLoading] = useState(true); // State to show loading spinner
  const [error, setError] = useState(null); // State to handle errors

  const userInfo = useSelector((state) => state.user.userinfo);
  const Token = userInfo?.token; 
  console.log(userInfo);
  useEffect(() => {
    // Fetch donation data from the API
    axios
      .get('http://localhost:8062/donation/alldonation',{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Token}`
        },

      }) // Replace with your actual API endpoint
      .then((response) => {
        console.log(response);
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
                  <th>Ammount</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((donation) => (
                  <tr key={donation.id}>
                    <td>{donation.id}</td>
                    <td>{donation.user_name}</td>
                    <td>{donation.purpose}</td>
                    <td>{donation.ammount}</td>
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
