import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Register necessary Chart.js components
Chart.register(...registerables);

const Dashboard = () => {
  const [bookingData, setBookingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookingResponse = await axios.get('http://localhost:8062/admin/all-bookings');
        setBookingData(bookingResponse.data);
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
        backgroundColor: 'rgba(255, 215, 0, 0.8)', // Golden color
        borderColor: 'rgba(218, 165, 32, 1)', // Dark golden
        borderWidth: 2,
      },
    ],
  };

  return (
    <Container className="py-4 d-flex flex-column align-items-center" style={{ 
      fontFamily: '"Poppins", sans-serif', 
      backgroundColor: '#FAF3E0', 
      minHeight: '100vh' 
    }}>
      <h1 className="text-center fw-bold mb-4" style={{ 
        color: '#8B0000', 
        fontFamily: '"Times New Roman", serif', 
        textShadow: '2px 2px 8px rgba(139,0,0,0.6)' // Soft glow effect 
      }}>
        🛕 Temple Dashboard 🛕
      </h1>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="warning" />
          <p className="mt-2">Fetching data...</p>
        </div>
      ) : error ? (
        <p className="text-danger text-center">{error}</p>
      ) : (
        <Row className="justify-content-center w-100">
          <Col md={10}>
            <Card className="shadow-lg p-4 text-center" style={{ 
              border: '3px solid #FFD700', 
              backgroundColor: '#FFF5C3', 
              boxShadow: '0px 4px 15px rgba(218, 165, 32, 0.5)' // Glowing golden effect
            }}>
              <h4 style={{ 
                color: '#B8860B', 
                fontWeight: 'bold', 
                fontFamily: '"Garamond", serif' 
              }}>
                📜 Monthly Booking History
              </h4>
              <div style={{ height: '400px' }}> {/* Increased graph height */}
                <Bar 
                  data={bookingChartData} 
                  options={{
                    maintainAspectRatio: false, // Allows bigger graph
                    plugins: {
                      legend: {
                        labels: {
                          color: '#8B0000', // Dark red legend text
                          font: {
                            size: 14,
                            family: '"Garamond", serif',
                          }
                        }
                      }
                    },
                    scales: {
                      x: {
                        ticks: { color: '#8B0000', font: { size: 14 } }, // X-axis text color
                        grid: { color: '#D2B48C' } // Light brown grid lines
                      },
                      y: {
                        ticks: { color: '#8B0000', font: { size: 14 } }, // Y-axis text color
                        grid: { color: '#D2B48C' } // Light brown grid lines
                      }
                    }
                  }}
                />
              </div>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Dashboard;
