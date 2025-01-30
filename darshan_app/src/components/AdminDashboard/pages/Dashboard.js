import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Register necessary Chart.js components
Chart.register(...registerables);

const Dashboard = () => {
  const [bookingData, setBookingData] = useState([]);
  const [donationData, setDonationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch booking data
        const bookingResponse = await axios.get('http://localhost:8080/admin/all-bookings');
        setBookingData(bookingResponse.data);

        // Fetch donation data
        const donationResponse = await axios.get('/api/donations/monthly');
        setDonationData(donationResponse.data);

        setLoading(false);
      } catch (err) {
        setError('Failed to load data.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Process Booking Data for Chart.js
  const bookingChartData = {
    labels: bookingData.map(item => item.month), // X-axis labels (Months)
    datasets: [
      {
        label: 'Bookings per Month',
        data: bookingData.map(item => item.count), // Y-axis data (Booking Count)
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Process Donation Data for Chart.js
  const donationChartData = {
    labels: donationData.map(item => item.month), // X-axis labels (Months)
    datasets: [
      {
        label: 'Donations per Month',
        data: donationData.map(item => item.total_amount), // Y-axis data (Total Donations)
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container className="py-4">
      <h1 className="fs-2 fw-bold mb-4">Dashboard</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <Row className="g-4">
          <Col md={6}>
            <Card className="shadow-sm p-3">
              <h5>Monthly Booking History</h5>
              <Bar data={bookingChartData} />
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow-sm p-3">
              <h5>Monthly Donations History</h5>
              <Bar data={donationChartData} />
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Dashboard;
