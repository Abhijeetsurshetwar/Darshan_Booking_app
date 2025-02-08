import React, { useEffect, useState } from "react";
import { Table, Container, Card, Spinner } from "react-bootstrap";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../App.css"; // Import CSS

const Accommodation = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const response = await axios.get("https://localhost:8065/Accomodation/getAccomodation");
        setAccommodations(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load accommodation data.");
        setLoading(false);
      }
    };

    fetchAccommodations();
  }, []);

  return (
    <div className="accommodation-page">
      <Navbar /> {/* Navbar */}

      <Container className="py-5">
        <h1 className="text-center mb-4">🏠 Available Accommodations 🏠</h1>

        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="warning" />
            <p className="mt-2">Fetching data...</p>
          </div>
        ) : error ? (
          <p className="text-danger text-center">{error}</p>
        ) : (
          <Card className="shadow-sm">
            <Table responsive bordered hover variant="light">
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Name</th>
                  <th>Availability</th>
                  <th>Address</th>
                  <th>Contact No</th>
                </tr>
              </thead>
              <tbody>
                {accommodations.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.availability ? "Available" : "Not Available"}</td>
                    <td>{item.address}</td>
                    <td>{item.contactno}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        )}
      </Container>

      <Footer /> {/* Footer */}
    </div>
  );
};

export default Accommodation;
